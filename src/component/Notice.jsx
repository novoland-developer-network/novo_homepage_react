import React, {Component} from 'react';
import '../asset/css/notice.css';
/** @var list {Array} */
import list from '../data/notice';

class Notice extends Component {
  constructor(props) {
    super(props);
    this.bg_color = props.theme === 'dark' ? 'bg-danger' : 'bg-warning';
    list.push(list[0]);
    this.state = {
      list: list,
    };
  }

  componentDidMount() {
    this.auto();
  }

  auto = () => {
    const notChild = document.querySelector('.notice_child');

    let n = 0;
    setInterval(() => {

      n++;

      if (n >= list.length) {
        notChild.style.top = 0;
        notChild.style.transition = ' all 0s ease';
        n = 0;
      }
      else {
        notChild.style.top = (-n * 1.5) + 'rem';
        notChild.style.transition = 'all 1s ease';
      }

    }, 3000);

  };

  genNoticeList = () => {
    let dom = [], notice;
    const list = this.state.list;
    for (let i in list) {
      notice = list[i];
      dom.push(
          <p className={this.bg_color} key={i}>
            <a href={notice.link}
               target="_blank"
               rel="noopener noreferrer">{notice.title}</a>
          </p>,
      );
    }
    return dom;
  };

  render() {
    return (
        <div id="notice">
          <div className="notice_child">
            {list && this.genNoticeList()}
          </div>
        </div>
    );
  }
}

export default Notice;
