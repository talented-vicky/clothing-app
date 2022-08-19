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
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
            },
            {
                id: 2,
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
            },
            {
                id: 3,
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
            },
            {
                id: 4,
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
            },
            {
                id: 5,
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png'
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                this.state.sections.map(({id, title, imageUrl}) => (
                    <MenuItem key={id} title={title}/>
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