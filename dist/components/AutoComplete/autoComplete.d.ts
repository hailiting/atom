import { FC, ReactElement } from "react";
import { InputProps } from "../Input/input";
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
export interface IAutoCompleteProps extends Omit<InputProps, "onSelect"> {
    /**获取下下拉单数据 */
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    /**被选中的item对象 */
    onSelect?: (item: DataSourceType) => void;
    /**下拉单列表单一行的dom */
    renderOption?: (item: DataSourceType) => ReactElement;
}
/**
 * #### 引用
 * ~~~js
 * import { AutoComplete} from "vikingship"
 * ~~~
 */
export declare const AutoComplete: FC<IAutoCompleteProps>;
export default AutoComplete;
