import React, {Component} from 'react';
import {
    Button,
    Dropdown,
    DropdownButton,
    Form,
    InputGroup,
} from 'react-bootstrap';
import list from '../data/search_list';
import dark_list from '../data/search_list_dark';
import eggs_list from '../data/easter_eggs';

/**
 * 搜索框
 */
class SearchField extends Component {
    constructor(props) {
        super(props);
        const historySearch = localStorage.getItem('search_title');

        let link = '', title = '搜索引擎';
        if (historySearch !== null) {
            title = historySearch;
            list.forEach(function (v) {
                v.forEach(function (value) {
                    if (value.title === title) {
                        link = value.link;
                    }
                });
            });
            if (link === '') {
                title = "搜索引擎"
            }
        }

        const search_list = list;

        this.state = {
            /** @var title {String} */
            title,
            /** @var link {String} */
            link,
            /** @var keyword {String} */
            keyword: '',
            /** @var search_list {Array} */
            search_list,
            eggs: null,
        };
    }

    componentDidMount() {
        document.getElementById("keyword").focus();
    }

    /**
     * 记忆最后使用的搜索引擎
     * @param title
     * @param link
     */
    changeSearch = (title, link) => {
        this.setState({
            title,
            link,
        });

        localStorage.setItem('search_title', title);
    };

    /**
     * 生成搜索引擎的列表
     * @returns {[]}
     */
    dropList = () => {
        let drop_list = [];
        this.state.search_list.forEach((v, i) => {
            if (i !== 0) {
                drop_list.push(
                    <Dropdown.Divider key={i}/>
                );
            }
            v.forEach((value, index) => {
                const title = value.title,
                    link = value.link;
                drop_list.push(
                    <Dropdown.Item
                        key={`${i}_${index}`}
                        href={link}
                        onClick={(e) => {
                            e.preventDefault();

                            this.changeSearch(title, link);
                        }}
                    >{title}</Dropdown.Item>
                );
            });
        });

        return drop_list;
    };

    /**
     * 打开黑暗模式的搜索列表
     */
    changeSearchList = () => {
        this.setState({
            search_list: dark_list,
            title: '里·搜索引擎',
            link: '',
            keyword: '',
        });
        this.props.onchangeThemes('dark');
    };


    easterEggs = () => {
        // eslint-disable-next-line
        const changeSearchList = this.changeSearchList;

        for (let index in eggs_list) {
            const eggs = eggs_list[index];
            if (this.state.keyword === eggs.secret) {
                const method = eggs.method;
                // eslint-disable-next-line
                eval(`${method}()`);
                this.setState({
                    eggs: method
                });
                return true;
            }
        }

        return false;
    };

    /**
     * 搜索提交
     */
    toSearch = () => {

        if (this.easterEggs()) {
            return;
        }

        if (this.state.link !== '') {
            // window.location.link = this.state.link + this.state.keyword;
            const url = this.state.link.replace('{keyword}',
                this.state.keyword);
            window.open(url, '_blank');
        }
        else {
            alert('你尚未选择搜索引擎');
            document.getElementById('search').focus();
        }
    };

    /**
     * 随输入更改状态
     * @param e
     */
    typeHandler = (e) => {
        this.setState({keyword: e.target.value})
    };

    render() {
        return (
            <Form className="lang" onSubmit={(e) => {
                e.preventDefault();
                this.toSearch();
            }} style={{marginTop: 30}}>
                <InputGroup size="lg" className="mb-3">
                    <DropdownButton
                        id="search"
                        as={InputGroup.Prepend}
                        variant={this.props.theme === 'dark'
                            ? 'dark'
                            : 'outline-secondary'}
                        title={this.state.title}>
                        {this.dropList()}
                    </DropdownButton>
                    <Form.Control
                        name="keyword"
                        value={this.state.keyword}
                        onChange={this.typeHandler}
                        id="keyword"
                        size="lg"
                        placeholder="搜你所想"/>
                    <InputGroup.Append>
                        <Button type="submit" variant={this.props.theme === 'dark' ? 'dark' : "primary"}>搜索</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        );
    }
}

export default SearchField;