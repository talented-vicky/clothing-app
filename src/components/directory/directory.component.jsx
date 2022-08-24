import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                id: 1,
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                linkUrl: 'hats'
            },
            {
                id: 2,
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                linkUrl: ''
            },
            {
                id: 3,
                title: 'sneakers',
                imageUrl: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
                linkUrl: ''
                // https://i.ibb.co/0jqHpnp/sneakers.png
            },
            {
                id: 4,
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                linkUrl: ''
            },
            {
                id: 5,
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
                size: 'large',
                linkUrl: ''
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                this.state.sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps}/>
                ))
                }
            </div>
        )
    }
}

// {this.state.sections.map(section => {
//     <MenuItem key={section.id} title={section.title}/>
// })}
export default Directory;