const ScrollToBottom = (ref: any) => {
    ref.current?.scrollToEnd({ animated: true });
};

export default ScrollToBottom;