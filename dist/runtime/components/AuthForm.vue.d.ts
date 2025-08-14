import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, FormProps, FormFieldProps, FormSchema, FormSubmitEvent, SeparatorProps, ComponentConfig, InferInput, PinInputProps } from '@nuxt/ui';
import theme from '#build/ui-pro/auth-form';
type AuthForm = ComponentConfig<typeof theme, AppConfig, 'authForm', 'uiPro'>;
type AuthFormField = FormFieldProps & {
    name: string;
    type?: 'checkbox' | 'select' | 'password' | 'text' | 'otp';
    defaultValue?: any;
    otp?: PinInputProps;
};
export interface AuthFormProps<T extends FormSchema = FormSchema<object>, F extends AuthFormField = AuthFormField> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    /**
     * The icon displayed above the title.
     * @IconifyIcon
     */
    icon?: string;
    title?: string;
    description?: string;
    fields?: F[];
    /**
     * Display a list of Button under the description.
     * `{ color: 'neutral', variant: 'subtle', block: true }`{lang="ts-type"}
     */
    providers?: ButtonProps[];
    /**
     * The text displayed in the separator.
     * @defaultValue 'or'
     */
    separator?: string | SeparatorProps;
    /**
     * Display a submit button at the bottom of the form.
     * `{ label: 'Continue', block: true }`{lang="ts-type"}
     */
    submit?: ButtonProps;
    schema?: T;
    validate?: FormProps<T>['validate'];
    validateOn?: FormProps<T>['validateOn'];
    validateOnInputDelay?: FormProps<T>['validateOnInputDelay'];
    disabled?: FormProps<T>['disabled'];
    loading?: ButtonProps['loading'];
    loadingAuto?: FormProps<T>['loadingAuto'];
    class?: any;
    onSubmit?: FormProps<T>['onSubmit'];
    ui?: AuthForm['slots'];
}
export type AuthFormEmits<T extends object> = {
    submit: [payload: FormSubmitEvent<T>];
};
type DynamicFieldSlots<T, F, SlotProps = {
    field: F;
    state: T;
}> = Record<string, (props: SlotProps) => any> & Record<`${keyof T extends string ? keyof T : never}-field`, (props: SlotProps) => any>;
type DynamicFormFieldSlots<T> = Record<string, (props?: {}) => any> & Record<`${keyof T extends string ? keyof T : never}-${'label' | 'description' | 'hint' | 'help' | 'error'}`, (props?: {}) => any>;
export type AuthFormSlots<T extends object = object, F extends AuthFormField = AuthFormField> = {
    header(props?: {}): any;
    leading(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    providers(props?: {}): any;
    validation(props?: {}): any;
    submit(props: {
        loading: boolean;
    }): any;
    footer(props?: {}): any;
} & DynamicFieldSlots<T, F> & DynamicFormFieldSlots<T>;
declare const _default: <T extends FormSchema, F extends AuthFormField>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly onSubmit?: ((payload: FormSubmitEvent<import("vue").Reactive<InferInput<T>>>) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onSubmit"> & AuthFormProps<T, F> & Partial<{}>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        formRef: Readonly<import("vue").ShallowRef<import("vue").ShallowUnwrapRef<import("@nuxt/ui").Form<T>> | null>>;
        state: import("vue").Reactive<InferInput<T>>;
    }>): void;
    attrs: any;
    slots: AuthFormSlots<import("vue").Reactive<InferInput<T>>, F>;
    emit: (evt: "submit", payload: FormSubmitEvent<import("vue").Reactive<InferInput<T>>>) => void;
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T as K]: T[K];
} & {};
