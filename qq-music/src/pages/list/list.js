import React, { Component } from 'react'
import './list.css'
import { Icon } from 'antd';
import { songList } from '../../utli/API'

class List extends Component {
    constructor(props) {
        super()
        this.state = {
            topInfo: {},
            songList: [],
            updateTime: '',
            totalSongNum: ''
        }
    }
    componentDidMount() {
        // console.log(this.props.match.params.id)
        this.$http({
            url: songList + this.props.match.params.id
        }).then(d => {
            // console.log(d.data.data.songList)
            this.setState({
                songList: d.data.data.songList,
                topInfo: d.data.data.topInfo,
                updateTime: d.data.data.updateTime,
                totalSongNum: d.data.data.totalSongNum
            })
        })
    }
    toPlay(id,item) {
        // console.log(id)
        this.props.history.push({ pathname: '/play/'+id, state: {item} });
        // this.props.history.push({pathname:'/play/' + attr,state:{item}})
    }
    render() {
        // console.log(this.state.songList, this.state.topInfo)
        var el = this.state.songList.map((item, index) => {
            return (
                <li className="song_list__item" key={item.songId}
                    onClick={() => { this.toPlay(item.songId,item) }}>
                    <div className="song_list__index">
                        <span className="song_list__index_num">{index + 1}</span>
                        <span className="song_list__index_change">169%</span>
                    </div>
                    <div className="song_list__bd">
                        <h3 className="song_list__tit">
                            {item.songName}
                        </h3>
                        <p className="song_list__desc">
                            {
                                item.singer.map(item => {
                                    return <span key={item.singerMid}>{item.singerName}&nbsp;&nbsp;</span>
                                })
                            }
                        </p>
                    </div>
                    <div className="song_list__ctrl">
                        <Icon type="vertical-align-bottom" className="iconStyle" />
                    </div>
                </li>
            )
        })
        return (
            <div className="list">
                {/* 顶部固定定位 */}
                <div className="top_bar">
                    <div className="top_bar__box">
                        <span className="top_bar__media top_bar__media--square">
                            <img src="https://y.gtimg.cn/music/common/upload/t_playsong_ad/1207759.png?max_age=2592000" alt="" className="top_bar__media_img" />
                        </span>
                        <div className="top_bar__bd">
                            <h2 className="top_bar__tit">更多QQ音乐排行榜</h2>
                        </div>
                        <a href="" className="top_bar__btn">戳我查看</a>
                    </div>
                </div>
                {/* 列表部分 */}
                <div className="player">
                    <div className="player__cover">
                        <img src={this.state.topInfo.picAlbum} className="player__cover_img" alt="" />
                        {/* <img src="https://y.gtimg.cn/music/photo_new/T003R300x300M000002oimNk21RP7V.jpg?max_age=2592000" className="player__cover_img" alt="" /> */}
                    </div>
                    <div className="player__info">
                        {/* <h2 className="player__info_tit">流行指数榜</h2>
                        <p className="player__info_txt">流行指数榜 第170天</p>
                        <p className="player__info_desc">更新时间：2019-06-19</p> */}
                        <h2 className="player__info_tit">{this.state.topInfo.listName}</h2>
                        <p className="player__info_txt">{this.state.topInfo.listName} 第170天</p>
                        <p className="player__info_desc">更新时间：{this.state.updateTime}</p>
                    </div>
                    <a href="javascript:;" className="player__btn">
                        <Icon type="caret-right" theme="filled" className="iconStyle2" onClick={() => { this.toPlay() }} />
                    </a>
                </div>
                {/* 列表明细 */}
                <div>
                    <div className="count_box">
                        <div className="count_box__txt">
                            排行榜
                            {/* <span className="count_box__num">共100首</span> */}
                            <span className="count_box__num">共{this.state.totalSongNum}首</span>
                        </div>
                    </div>
                    <ul className="mod_song_list mod_song_list--rank">
                        {el}
                        {/* <li className="song_list__item">
                            <div className="song_list__index">
                                <span className="song_list__index_num">1</span>
                                <span className="song_list__index_change">169%</span>
                            </div>
                            <div className="song_list__bd">
                                <h3 className="song_list__tit">
                                    You Need To Calm Down
                                </h3>
                                <p className="song_list__desc">Taylor Swift</p>
                            </div>
                            <div className="song_list__ctrl">
                                <Icon type="vertical-align-bottom" className="iconStyle" />
                            </div>
                        </li>
                        <li className="song_list__item">
                            <div className="song_list__index">
                                <span className="song_list__index_num">1</span>
                                <span className="song_list__index_change">169%</span>
                            </div>
                            <div className="song_list__bd">
                                <h3 className="song_list__tit">
                                    You Need To Calm Down
                                </h3>
                                <p className="song_list__desc">Taylor Swift</p>
                            </div>
                            <div className="song_list__ctrl">
                                <Icon type="vertical-align-bottom" className="iconStyle" />
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}
export default List