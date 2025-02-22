import PropTypes from 'prop-types';
import React, { RefObject } from 'react';
import { ListViewProps, ListRenderItemInfo, NativeSyntheticEvent, NativeScrollEvent, StyleProp, ViewStyle } from 'react-native';
import { LoadEarlierProps } from './LoadEarlier';
import Message from './Message';
import { User, IMessage, Reply } from './Models';
import { FlashList } from '@shopify/flash-list';
export interface MessageContainerProps<TMessage extends IMessage> {
    messages?: TMessage[];
    isTyping?: boolean;
    user?: User;
    listViewProps: Partial<ListViewProps>;
    inverted?: boolean;
    loadEarlier?: boolean;
    alignTop?: boolean;
    scrollToBottom?: boolean;
    scrollToBottomStyle?: StyleProp<ViewStyle>;
    invertibleScrollViewProps?: any;
    extraData?: any;
    scrollToBottomOffset?: number;
    forwardRef?: RefObject<FlashList<IMessage>>;
    renderChatEmpty?(): React.ReactNode;
    renderFooter?(props: MessageContainerProps<TMessage>): React.ReactNode;
    renderMessage?(props: Message['props']): React.ReactNode;
    renderLoadEarlier?(props: LoadEarlierProps): React.ReactNode;
    scrollToBottomComponent?(): React.ReactNode;
    onLoadEarlier?(): void;
    onQuickReply?(replies: Reply[]): void;
    infiniteScroll?: boolean;
    isLoadingEarlier?: boolean;
}
interface State {
    showScrollBottom: boolean;
    hasScrolled: boolean;
}
export default class MessageContainer<TMessage extends IMessage = IMessage> extends React.PureComponent<MessageContainerProps<TMessage>, State> {
    static defaultProps: {
        messages: never[];
        user: {};
        isTyping: boolean;
        renderChatEmpty: null;
        renderFooter: null;
        renderMessage: null;
        onLoadEarlier: () => void;
        onQuickReply: () => void;
        inverted: boolean;
        loadEarlier: boolean;
        listViewProps: {};
        invertibleScrollViewProps: {};
        extraData: null;
        scrollToBottom: boolean;
        scrollToBottomOffset: number;
        alignTop: boolean;
        scrollToBottomStyle: {};
        infiniteScroll: boolean;
        isLoadingEarlier: boolean;
    };
    static propTypes: {
        messages: PropTypes.Requireable<(object | null | undefined)[]>;
        isTyping: PropTypes.Requireable<boolean>;
        user: PropTypes.Requireable<object>;
        renderChatEmpty: PropTypes.Requireable<(...args: any[]) => any>;
        renderFooter: PropTypes.Requireable<(...args: any[]) => any>;
        renderMessage: PropTypes.Requireable<(...args: any[]) => any>;
        renderLoadEarlier: PropTypes.Requireable<(...args: any[]) => any>;
        onLoadEarlier: PropTypes.Requireable<(...args: any[]) => any>;
        listViewProps: PropTypes.Requireable<object>;
        inverted: PropTypes.Requireable<boolean>;
        loadEarlier: PropTypes.Requireable<boolean>;
        invertibleScrollViewProps: PropTypes.Requireable<object>;
        extraData: PropTypes.Requireable<object>;
        scrollToBottom: PropTypes.Requireable<boolean>;
        scrollToBottomOffset: PropTypes.Requireable<number>;
        scrollToBottomComponent: PropTypes.Requireable<(...args: any[]) => any>;
        alignTop: PropTypes.Requireable<boolean>;
        scrollToBottomStyle: PropTypes.Requireable<number | boolean | object>;
        infiniteScroll: PropTypes.Requireable<boolean>;
    };
    state: {
        showScrollBottom: boolean;
        hasScrolled: boolean;
    };
    renderTypingIndicator: () => JSX.Element | null;
    renderFooter: () => React.ReactNode;
    renderLoadEarlier: () => React.ReactNode;
    scrollTo(options: {
        animated?: boolean;
        offset: number;
    }): void;
    scrollToBottom: (animated?: boolean) => void;
    handleOnScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    renderRow: ({ item, index }: ListRenderItemInfo<TMessage>) => React.ReactNode;
    renderChatEmpty: () => React.ReactNode;
    renderHeaderWrapper: () => JSX.Element;
    renderScrollBottomComponent(): React.ReactNode;
    renderScrollToBottomWrapper(): JSX.Element;
    onLayoutList: () => void;
    onEndReached: ({ distanceFromEnd }: {
        distanceFromEnd: number;
    }) => void;
    keyExtractor: (item: TMessage) => string;
    render(): JSX.Element;
}
export {};
