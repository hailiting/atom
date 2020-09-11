import { FC, InputHTMLAttributes, ReactElement, ChangeEvent } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
declare type InputSize = "lg" | "sm";
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
    /**是否禁用Input */
    disabled?: boolean;
    /**设置input 大小 支持 lg 或是 sm */
    size?: InputSize;
    /**添加图标，在右侧悬浮添加一个图标，用于提示 */
    icon?: IconProp;
    /**添加前缀，用于配置一些固定组合 */
    prepend?: string | ReactElement;
    /**添加后缀，用于配置一些固定组合 */
    append?: string | ReactElement;
    /**input说明 */
    ariaLabel?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Input 输入框
 * ~~~js
 * import {Input} from "vikingship"
 * ~~~
 * 支持HTMLInput的所有基础属性
 */
export declare const Input: FC<InputProps>;
export default Input;
