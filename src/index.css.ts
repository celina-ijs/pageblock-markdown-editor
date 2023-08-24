import {Styles} from '@ijstech/components';

const Theme = Styles.Theme.ThemeVars;

const pStyle = (level: number) => {
    return {
        fontSize: `${24 - (level * 2)}px`
    }
}

Styles.cssRule('i-scom-markdown-editor', {
    overflow: 'hidden',
    outline: 'none',
    $nest: {
        'i-panel.container': {
            width: Theme.layout.container.width,
            maxWidth: Theme.layout.container.maxWidth,
            overflow: Theme.layout.container.overflow,
            textAlign: (Theme.layout.container.textAlign as any),
            margin: '0 auto'
        },
        'a': {
            display: 'initial'
        },
        // '.toastui-editor-dropdown-toolbar': {
        //     maxWidth: '100%',
        //     flexWrap: 'wrap',
        //     height: 'auto'
        // },
        // ".toastui-editor-contents ul:has(li input[type='checkbox'])": {
        //     paddingLeft: 0,
        // },
        // ".toastui-editor-contents ul li:has(input[type='checkbox']):before": {
        //     content: "none",
        // },
        '.toastui-editor-contents p': {
            color: Theme.editor.fontColor
        },
        '#pnlEditorWrap': {
            $nest: {
                '.toastui-editor-defaultUI-toolbar': {
                    display: 'none'
                },
                '.toastui-editor-toolbar': {
                    display: 'none'
                },
                '.toastui-editor-defaultUI .ProseMirror': {
                    padding: '0',
                    margin: '10px 0'
                },
                '.toastui-editor-defaultUI': {
                    border: 'none',
                    outline: 'none'
                },
                '.toastui-editor-mode-switch': {
                    background: 'transparent'
                },
                ".toastui-editor-md-container": {
                    backgroundColor: Theme.editor.background
                },
                ".toastui-editor-ww-container": {
                    backgroundColor: Theme.editor.background
                },
                '.toastui-editor-contents': {
                    transition: 'all 125ms cubic-bezier(0.4,0,0.2,1)'
                }
            }
        },
        '.custom-p .p1, p .p1': pStyle(0),
        '.custom-p .p2, p .p2': pStyle(1),
        '.custom-p .p3, p .p3': pStyle(2),
        '.custom-p .p4, p .p4': pStyle(3),
        '.custom-p .p5, p .p5': pStyle(4),
        '.custom-p .p6, p .p6': pStyle(5)
    }
});
