import React, {Component} from "react";
import {Button, Dropdown, DropdownButton, Form, InputGroup} from "react-bootstrap";
import list from "./search_list";
import dark_list from "./search_list_dark";
import eggs_list from "./search/easter_eggs"

/**
 * 搜索框
 */
class SearchField extends Component {
    constructor(props) {
        super(props);
        const historySearch = localStorage.getItem("search_title");

        let href = "", title = "搜索引擎";
        if (historySearch !== null) {
            title = historySearch;
            list.forEach(function (v) {
                v.forEach(function (value) {
                    if (value.title === title) {
                        href = value.href;
                    }
                });
            });
            if (href === "") title = "搜索引擎"
        }

        const search_list = list;

        this.state = {
            title,
            href,
            keyword: "",
            search_list,
            eggs: null
        };
    }

    componentDidMount() {
        document.getElementById("keyword").focus();
    }

    /**
     * 记忆最后使用的搜索引擎
     * @param title
     * @param href
     */
    changeSearch = (title, href) => {
        this.setState({
            title,
            href
        });

        localStorage.setItem("search_title", title);
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
                    href = value.href;
                drop_list.push(
                    <Dropdown.Item
                        key={`${i}_${index}`}
                        href={href}
                        onClick={(e) => {
                            e.preventDefault();

                            this.changeSearch(title, href);
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
            title: "里·搜索引擎",
            keyword: ""
        });
        this.props.onchangeThemes('dark');
    };


    easterEggs = () => {
        const changeSearchList = this.changeSearchList;

        for (let index in eggs_list) {
            const eggs = eggs_list[index];
            if (this.state.keyword === eggs.secret) {
                const method = eggs.method;
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

        if (this.state.href !== "") {
            // window.location.href = this.state.href + this.state.keyword;
            window.open(this.state.href + this.state.keyword, "_blank");
        } else {
            alert("你尚未选择搜索引擎");
            document.getElementById("search").focus();
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
            <Form onSubmit={(e) => {
                e.preventDefault();
                this.toSearch();
            }} style={{marginTop: 30}}>
                <InputGroup size="lg" className="mb-3">
                    <DropdownButton
                        id="search"
                        as={InputGroup.Prepend}
                        variant={this.props.theme === "dark" ? "dark" : "outline-secondary"}
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