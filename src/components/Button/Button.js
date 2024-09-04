import './Button.scss';
import { useMemo } from 'react';

const Button = ({ children, fn, url, target, variation, bgColor, color }) => {
    const backgroundClass = useMemo(() => {
        // if (bgColor) return ''
        return variation == 'secondary' ? 'bg-yellow' : 'bg-blue text-white'
    }, [bgColor, variation])



    return (
        <>
            {url ?
                <a href={url} target={target} className={`underline hover:opacity-80 btn-${variation}`} style={{ ...(bgColor && { backgroundColor: bgColor }), ...(color && { color: color }) }}>{children}</a>
                :
                <button className={`px-8 py-4 text-xl ${backgroundClass} hover:opacity-85`} onClick={fn} style={{...(bgColor && {backgroundColor: bgColor}), ...(color && {color: color})}}>{children}</button>
            }
        </>

    )
}

export default Button;