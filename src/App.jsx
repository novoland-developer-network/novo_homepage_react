import React from 'react';
import './asset/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Header from './component/Header';
import Content from './component/Content';
import DarkModal from './component/DarkModal';
import './asset/css/dark.css';
import eggs_list from './data/easter_eggs';
import Notice from './component/Notice';
import 'normalize.css/normalize.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: null,
            show: false,
        };
    }

    componentDidMount() {
        for (let index in eggs_list) {
            /**
             * @var eggs {Object}
             */
            const eggs = eggs_list[index];
            /**
             * @var eggs.mystery {String}
             */
            eggs.mystery && console.log(eggs.mystery);
        }
    }

    hideModal = () => {
        this.setState({show: false});
    };

    hasClass = (elem, cls) => {
        cls = cls || '';
        if (cls.replace(/\s/g, '').length === 0) return false; //当cls没有参数时，返回false
        return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
    };

    addClass = (ele, cls) => {
        if (!this.hasClass(ele, cls)) {
            ele.className = ele.className === '' ? cls : ele.className + ' ' + cls;
        }
    };

    changeThemes = (theme) => {
        this.addClass(document.getElementById('root'), theme);
        this.setState({
            show: true,
            theme
        });
    };

    render() {
        return (
            <>
                <Header/>
                <DarkModal show={this.state.show} onhide={this.hideModal}/>
                <Notice theme={this.state.theme}/>
                <Container>
                    <Content theme={this.state.theme}
                             onchangeThemes={(theme) => this.changeThemes(
                                 theme)}/>
                </Container>
            </>
        );
    }
}

export default App;