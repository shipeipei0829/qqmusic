import React, { Component } from 'react'
import './top.css'
import { toplist } from '../utli/API'
import { Icon } from 'antd';

class Top extends Component {
    constructor(props) {
        super()
        this.state = {
            top: [],
            listenCount: ''
        }
    }
    // 数字过滤器
    numFilter(n) {
        return  (parseInt(n) / 10000).toFixed(1)+"万"
    }

    toList(id){
        console.log(id)
        this.props.history.push('/list/'+id);
    }
    componentDidMount() {
        this.$http({
            url: toplist
        }).then(d => {
            console.log(d)
            this.setState({
                top: d.data.data
            })
        })
    }
    render() {

        var el = this.state.top.map(item => {
            return (
                <li className="topic_item" key={item.id} onClick={()=>{this.toList(item.id)}}>
                    <div className="topic_main" >
                        <div className="topic_media">
                            <img src={item.picUrl} alt="" />
                            <span className="listen_count"><Icon type="customer-service" className="icon icon_listen" />{this.numFilter(item.listenCount)}</span>
                        </div>
                        <div className="topic_info">
                            <div className="topic_cont">
                                <h3 className="topic_tit">{item.title}</h3>
                                {
                                    item.songList.map((item, index) => {
                                        return (
                                            <p key={item.number}>{index + 1}<span className="text_name">{item.songName}</span>-{item.singerName}</p>
                                        )
                                    })
                                }
                                {/* <p>1<span className="text_name">You Need To Calm Down</span>- Taylor Swift</p>
                                <p>1<span className="text_name">You Need To Calm Down</span>- Taylor Swift</p>
                                <p>1<span className="text_name">You Need To Calm Down</span>- Taylor Swift</p> */}

                            </div>
                        </div>
                    </div>

                </li>
            )
        })
        return (
            <div className="mod_topic">
                <ul>
                    {el}
                    {/* <li className="topic_item">
                        <div className="topic_main">
                            <div className="topic_media">
                                <img src="https://y.gtimg.cn/music/photo_new/T003R300x300M000002oimNk21RP7V.jpg?max_age=2592000" alt="" />
                                <span className="listen_count"><Icon type="customer-service" className="icon icon_listen"/>1910.0万</span>
                            </div>
                            <div className="topic_info">
                                <div className="topic_cont">
                                    <h3 className="topic_tit">巅峰榜·流行指数</h3>
                                    <p>1<span className="text_name">You Need To Calm Down</span>- Taylor Swift</p>
                                    <p>1<span className="text_name">You Need To Calm Down</span>- Taylor Swift</p>
                                    <p>1<span className="text_name">You Need To Calm Down</span>- Taylor Swift</p>
                                </div>
                            </div>
                        </div>

                    </li> */}
                    {/* <li className="topic_item">
                        <div className="topic_main">
                            <div className="topic_media">
                                <img src="https://y.gtimg.cn/music/photo_new/T003R300x300M000002oimNk21RP7V.jpg?max_age=2592000" alt="" />
                                <span className="listen_count"><Icon type="customer-service" className="icon icon_listen"/>1910.0万</span>
                            </div>
                            <div className="topic_info">
                                <div className="topic_cont">
                                    <h3 className="topic_tit">巅峰榜·流行指数</h3>
                                    <p>1<span className="text_name">You Need To Calm Down</span>- Taylor Swift</p>
                                    <p>1<span className="text_name">You Need To Calm Down</span>- Taylor Swift</p>
                                    <p>1<span className="text_name">You Need To Calm Down</span>- Taylor Swift</p>
                                </div>
                            </div>
                        </div>

                    </li> */}
                </ul>
            </div>
        )
    }
}
export default Top