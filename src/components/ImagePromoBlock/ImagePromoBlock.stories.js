
import ImagePromoBlock from './ImagePromoBlock';

const promoCopy = {
    "header": "Crawford County History",
    "body": "Learn more about Crawford County through historical photographs and information.",
    href: {
        url: '/history',
        label: 'Export the Past', 
    }
}

export default {
    title: 'Blocks/ImagePromoBlock',
    component: ImagePromoBlock,
    parameters: {
        layout: 'full',
    },
    tags: ['autodocs'],
};



export const Default = {
    render: () => {
        return (
            <div className='max-w-7xl p-2 mx-auto'>
                <ImagePromoBlock promo={promoCopy} image='https://images.squarespace-cdn.com/content/v1/624b503d11269629b387b9c3/1649102910495-TNRUPY6VYTRMUGH1P4IU/image-asset.jpeg?format=2500w' />
            </div>

        )
    }

}

