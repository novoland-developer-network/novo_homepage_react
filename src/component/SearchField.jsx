import React, {Component} from "react";
import {Button, Dropdown, DropdownButton, Form, InputGroup} from "react-bootstrap";
import list from "./search_list";

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

        this.state = {
            title,
            href,
            keyword: ""
        };
    }

    /**
     * 搜索操作
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
     * @param list
     * @returns {[]}
     */
    dropList = (list) => {
        let drop_list = [];
        list.forEach((v, i) => {
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
     * 搜索提交
     */
    toSearch = () => {
        console.log(this.state);
        if (this.state.href !== "") {
            window.location.href = this.state.href + this.state.keyword;
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
                        variant="outline-secondary"
                        title={this.state.title}>
                        {this.dropList(list)}
                    </DropdownButton>
                    <Form.Control
                        name="keyword"
                        value={this.state.keyword}
                        onChange={this.typeHandler}
                        size="lg"
                        placeholder="搜你所想"/>
                    <InputGroup.Append>
                        <Button type="submit" variant="primary">搜索</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        );
    }
}

export default SearchField;