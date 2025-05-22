import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ButtonSlots, ComponentConfig } from '@nuxt/ui';
import type { UseChatHelpers } from '@ai-sdk/vue';
import theme from '#build/ui-pro/chat-prompt-submit';
type ChatPromptSubmit = ComponentConfig<typeof theme, AppConfig, 'chatPromptSubmit', 'uiPro'>;
export interface ChatPromptSubmitProps extends /** @vue-ignore */ Pick<ButtonProps, 'size' | 'label'> {
    status?: UseChatHelpers['status']['value'];
    /**
     * The icon displayed in the button when the status is `ready`.
     * @defaultValue appConfig.ui.icons.arrowUp
     * @IconifyIcon
     */
    icon?: string;
    /**
     * The color of the button when the status is `ready`.
     * @defaultValue 'primary'
     */
    color?: ButtonProps['color'];
    /**
     * The variant of the button when the status is `ready`.
     * @defaultValue 'solid'
     */
    variant?: ButtonProps['variant'];
    /**
     * The icon displayed in the button when the status is `streaming`.
     * @defaultValue appConfig.ui.icons.stop
     * @IconifyIcon
     */
    streamingIcon?: string;
    /**
     * The color of the button when the status is `streaming`.
     * @defaultValue 'neutral'
     */
    streamingColor?: ButtonProps['color'];
    /**
     * The variant of the button when the status is `streaming`.
     * @defaultValue 'subtle'
     */
    streamingVariant?: ButtonProps['variant'];
    /**
     * The icon displayed in the button when the status is `submitted`.
     * @defaultValue appConfig.ui.icons.stop
     * @IconifyIcon
     */
    submittedIcon?: string;
    /**
     * The color of the button when the status is `submitted`.
     * @defaultValue 'neutral'
     */
    submittedColor?: ButtonProps['color'];
    /**
     * The variant of the button when the status is `submitted`.
     * @defaultValue 'subtle'
     */
    submittedVariant?: ButtonProps['variant'];
    /**
     * The icon displayed in the button when the status is `error`.
     * @defaultValue appConfig.ui.icons.reload
     * @IconifyIcon
     */
    errorIcon?: string;
    /**
     * The color of the button when the status is `error`.
     * @defaultValue 'error'
     */
    errorColor?: ButtonProps['color'];
    /**
     * The variant of the button when the status is `error`.
     * @defaultValue 'soft'
     */
    errorVariant?: ButtonProps['variant'];
    ui?: ChatPromptSubmit['slots'] & ButtonProps['ui'];
    class?: any;
}
export interface ChatPromptSubmitEmits {
    (e: 'stop'): void;
    (e: 'reload'): void;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ChatPromptSubmitProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    stop: () => any;
    reload: () => any;
}, string, import("vue").PublicProps, Readonly<ChatPromptSubmitProps> & Readonly<{
    onStop?: (() => any) | undefined;
    onReload?: (() => any) | undefined;
}>, {
    status: UseChatHelpers["status"]["value"];
    streamingColor: "error" | "info" | "primary" | "secondary" | "success" | "warning" | "neutral";
    streamingVariant: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost";
    submittedColor: "error" | "info" | "primary" | "secondary" | "success" | "warning" | "neutral";
    submittedVariant: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost";
    errorColor: "error" | "info" | "primary" | "secondary" | "success" | "warning" | "neutral";
    errorVariant: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ButtonSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
