import React from 'react';
import Code from '@components/Code';
import useI18n from '@hooks/useI18n';

const transitions = {
    en: {
        step1: `The personalSign function return a Promise.calling personalSign when the status is 'active' will invoke a wallet confirmation. If it is not called when 'active', the Promise will simply reject.`,
        step2: `A successful sign will resolve hash-string, a failed sign will reject.`,
    },
    zh: {
        step1: `personalSign 函数返回一个 Promise。在 status 为 'active' 时调用 personalSign，会根据入参调起钱包确认签名。如果不在 'active' 时调用，Promise 会直接 reject。`,
        step2: `成功签名会 resolve hash-string，失败则 reject。`,
    },
} as const;

const PersonalSign: React.FC = () => {
    const i18n = useI18n(transitions);

    return (
        <section>
            <h3>personalSign</h3>

            <h4>declare:</h4>
            <Code language='ts'>
                {code}
            </Code>

            <h4 className='mt-[16px]'>Description:</h4>
            <p>{i18n.step1}</p>
            <p>{i18n.step2}</p>
        </section>
    );
}

const code = `declare const personalSign: (message: string) => Promise<string>;`;

export default PersonalSign;