import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ComponentConfig } from '@nuxt/ui';
import type { Message, UseChatHelpers } from '@ai-sdk/vue';
import theme from '#build/ui-pro/chat-messages';
import type { ChatMessageProps } from '../types';
type ChatMessages = ComponentConfig<typeof theme, AppConfig, 'chatMessages', 'uiPro'>;
export interface ChatMessagesProps {
    messages?: Message[];
    status?: UseChatHelpers['status']['value'];
    /**
     * Whether to automatically scroll to the bottom when a message is streaming.
     * @defaultValue false
     */
    shouldAutoScroll?: boolean;
    /**
     * Whether to scroll to the bottom on mounted.
     * @defaultValue true
     */
    shouldScrollToBottom?: boolean;
    /**
     * Display an auto scroll button.
     * `{ size: 'md', color: 'neutral', variant: 'outline' }`{lang="ts-type"}
     * @defaultValue true
     */
    autoScroll?: boolean | Partial<ButtonProps>;
    /**
     * The icon displayed in the auto scroll button.
     * @defaultValue appConfig.ui.icons.arrowDown
     * @IconifyIcon
     */
    autoScrollIcon?: string;
    /**
     * The `user` messages props.
     * `{ side: 'right', variant: 'soft' }`{lang="ts-type"}
     */
    user?: Pick<ChatMessageProps, 'icon' | 'avatar' | 'variant' | 'side' | 'actions'>;
    /**
     * The `assistant` messages props.
     * `{ side: 'left', variant: 'naked' }`{lang="ts-type"}
     */
    assistant?: Pick<ChatMessageProps, 'icon' | 'avatar' | 'variant' | 'side' | 'actions'>;
    /**
     * Render the messages in a compact style.
     * This is done automatically when used inside a `UChatPalette`{lang="ts-type"}.
     * @defaultValue false
     */
    compact?: boolean;
    /**
     * The spacing offset for the last message in px. Can be useful when the prompt is sticky for example.
     * @defaultValue 0
     */
    spacingOffset?: number;
    class?: any;
    ui?: ChatMessages['slots'];
}
export interface ChatMessagesSlots {
    default(props?: {}): any;
    indicator(props?: {}): any;
    viewport(props: {
        onClick: () => void;
    }): any;
    content(props: {
        message: Message;
    }): any;
    leading(props: {
        message: Message;
    }): any;
    actions(props: {
        message: Message;
    }): any;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ChatMessagesProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ChatMessagesProps> & Readonly<{}>, {
    autoScroll: boolean | Partial<ButtonProps>;
    shouldAutoScroll: boolean;
    shouldScrollToBottom: boolean;
    spacingOffset: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, ChatMessagesSlots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
