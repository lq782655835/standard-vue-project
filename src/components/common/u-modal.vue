<template>
    <div v-if="currentVisible" @click="maskClosable && cancel()" @keydown.esc="cancel()" class="u-modal-wapper" >
        <div v-bind="$attrs" v-on="$listeners" @click.stop :class="type" class="u-modal" >
            <!-- 标题区 -->
            <div v-if="title" class="u-modal-head">
                <slot name="head">
                    <div class="title"><slot name="title">{{ title }}</slot></div>
                </slot>
            </div>
            <!-- 内容区 -->
            <div class="u-modal-body">
                <slot>{{ content }}</slot>
            </div>
            <!-- 操作区 -->
            <div class="u-modal-foot" v-if="okButton || cancelButton">
                <u-button v-if="cancelButton" @click="cancel">{{cancelButton}}</u-button>
                <u-button v-if="okButton" @click="ok"
                    :disabled="!enableConfirm" color="primary">{{okButton}}</u-button>
            </div>
            <u-icon v-if="showClose" name="close" @click="cancel" class="close" />
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

const ModalType = {
    Modal: 'modal',
    CONFIRM: 'confirm',
    ALERT: 'alert'
}

const Modal = {
    name: 'u-modal',
    props: {
        visible: { type: Boolean, default: false },
        title: { type: String, default: '' },
        type: { type: String, default: ModalType.Modal },
        okButton: { type: String, default: '确定' },
        cancelButton: { type: String, default: '取消' },

        content: String,
        showClose: { type: Boolean, default: true },
        maskClosable: { type: Boolean, default: false },
        enableConfirm: { type: Boolean, default: true }
    },
    data() {
        return {
            currentVisible: this.visible,
            ModalType
        }
    },
    watch: {
        visible(visible) {
            this.currentVisible = visible
        },
        currentVisible(visible) {
            document.body.style.overflow = visible ? 'hidden' : ''
        }
    },
    mounted() {
        document.body.appendChild(this.$el)
    },
    methods: {
        open() {
            if (!this.$el) this.$mount(document.createElement('div'))

            this.currentVisible = true
            this.$emit('update:visible', true)
            this.$emit('open')
        },
        ok() {
            this.$emit('ok')
            this.close(true)
        },
        cancel() {
            this.$emit('cancel')
            this.close(false)
        },
        close(ok) {
            let cancel = false
            this.$emit('before-close', {
                ok,
                preventDefault: () => (cancel = true)
            })
            if (cancel) return

            this.currentVisible = false
            this.$emit('update:visible', false)
            this.$emit('close', { ok })
        }
    }
}

Modal.confirm = content =>
    new Promise((resolve, reject) => {
        const Ctor = Vue.component('u-modal')
        if (!Ctor) return

        let instance = new Ctor({
            propsData: { content, type: ModalType.CONFIRM, showClose: false }
        })
        instance.$on('ok', () => resolve())
        instance.$on('cancel', () => reject())
        instance.open()
    })

Modal.alert = content =>
    new Promise(resolve => {
        const Ctor = Vue.component('u-modal')
        if (!Ctor) return

        let instance = new Ctor({
            propsData: { content, type: ModalType.ALERT, showClose: false, cancelButton: '' }
        })
        instance.$on('ok', () => resolve())
        instance.open()
    })

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$alert = Modal.alert
export default Modal
</script>

<style lang="scss" scoped>
// 朦层
.u-modal-wapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    -webkit-overflow-scrolling: touch;
    touch-action: cross-slide-y pinch-zoom double-tap-zoom;
    text-align: center;
    overflow: hidden;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.5);

    &:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        height: 100%;
    }

    &:focus {
        outline: none;
    }
}

// 弹窗样式
.u-modal {
    position: relative;
    min-width: 440px;
    min-height: 240px;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    background: #ffffff;
    color: #222222;
    border-radius: 2px;

    &.confirm,
    &.alert {
        .u-modal-body {
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%, -50%);
            margin: 0;
        }

        .u-modal-foot {
            position: absolute;
            bottom: 40px;
            right: 50px;
            margin: 0;
        }
    }

    &-head {
        position: relative;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid $border-color;

        .title {
            padding-left: 20px;
            font-size: 16px;
            color: #333333;
            letter-spacing: 0;
        }
    }

    &-body {
        position: relative;
        margin: 30px 50px;
        max-height: 60vh;
        max-width: 80vw;
        overflow-y: auto;
    }

    &-foot {
        margin: 40px 50px;
        text-align: right;

        .u-button {
            margin-left: 20px;

            &:first-child {
                margin-left: 0;
            }
        }
    }

    .close {
        position: absolute;
        right: 16px;
        top: 16px;
    }
}
</style>
