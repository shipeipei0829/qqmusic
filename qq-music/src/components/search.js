import React, { Component } from 'react'
import { Icon, Input } from 'antd';
import './search.css'
import $ from 'jquery'
import { search, albumImg } from '../utli/API'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            msg: '',
            searchList: [],
            bgImg: '',
            albumMid: '',
            singerMid: '',
            first: '',
            singer:[],
            hots: [
                {
                    con: '周笔畅  新歌'
                },
                {
                    con: '林俊杰'
                },
                {
                    con: '火箭少女101'
                },
                {
                    con: '周杰伦'
                },
                {
                    con: '毛不易'
                }

            ],
            isshowHots: true,
            isshowList: false
        }
    }
    componentDidMount() {

    }
    change(e) {
        var msg = e.target.value;
        this.setState({
            msg: msg
        })
    }
    focus() {
        this.setState({
            isshowHots: false
        })
        $('.search_bar_tip_text').show()
    }
    blur() {
        if (this.state.msg === '') {
            this.setState({
                isshowHots: true
            })
        }
    }
    del() {
        $('.search_input').val("")
    }
    quxiao() {
        $('.search_bar_tip_text').hide()
        this.setState({
            isshowHots: true,
            isshowList: false
        })
    }
    search() {
        console.log('123')
        $('.search_bar_tip_text').show()
        console.log(this.state.msg)
        this.setState({
            isshowHots: false,
            isshowList: true
        })
        this.$http({
            url: search + this.state.msg
        }).then(d => {
            console.log(d)
            var searchList = (d.data.data.songList).slice(0, 4)

            this.setState({
                searchList: searchList,
                first: d.data.data.songList[0],
                singer:d.data.data.songList[0].singer,
                albumMid: d.data.data.songList[0].albumMid,
                singerMid: d.data.data.songList[0].singer[0].singerMid
            })
            console.log(this.state.first)
            this.$http({
                url: albumImg + this.state.albumMid + '/' + this.state.singerMid
            }).then(d => {
                console.log(d)
                this.setState({
                    bgImg: d.data.data.singerAvatarUrl,
                })
            })
        })
        // URL：/albumImg/{:albummid}/{:singerMid}

    }
    showMore() {
        this.setState({
            searchList: []
        })
        this.$http({
            url: search + this.state.msg
        }).then(d => {
            console.log(d)
            var searchList = d.data.data.songList
            console.log(searchList)
            this.setState({
                searchList: searchList
            })
        })
    }
    changeIpt(con) {
        this.setState({
            msg: con,
            isshowhots: false
        })

    }
    toPlay(id, item) {
        this.props.history.push({ pathname: '/play/' + id, state: { item } });
    }
    render() {
        var el = this.state.searchList.map((item) => {
            return (
                <li className="mod_search_result_list_con" key={item.songMid} onClick={() => { this.toPlay(item.songId, item) }}>
                    <div className="music_icon">♫</div>
                    <div>
                        <p className="mod_search_result_list_tit">{item.songName}</p>
                        <p className="mod_search_result_list_singer">{
                            item.singer.map(item => {
                                return <span key={item.singerMid}>{item.singerName}</span>
                            })
                        }</p>
                    </div>

                </li>
            )
        })
        return (
            <div className="search_box">
                <div className="mod_search_bar">
                    <div className="search_bar_cont">

                        <Input placeholder="搜索歌曲、歌单、专辑" allowClear className="search_input" onChange={e => { this.change(e) }} onFocus={() => { this.focus() }} className="search_input" id="search_input" onBlur={() => { this.blur() }} onKeyDown={() => { if (event.keyCode == 13) { this.search(); return false; } }}
                            value={this.state.msg} />
                            
                        {/*  */}
                        <Icon type="search" className="iconStyle1" onClick={() => { this.search() }} />
                    </div>
                    <div className="search_bar_tip_text" onClick={() => { this.quxiao() }}>取消</div>
                </div>
                {
                    this.state.isshowHots ? (
                        <div className="mod_search_result">
                            <h3 className="result_tit">热门搜索</h3>
                            <div className="result_tags">
                                {
                                    this.state.hots.map(item => {
                                        return <span className="tag_s tag_hot" key={item.con} onClick={() => { this.changeIpt(item.con) }}>{item.con}</span>
                                    })
                                }

                            </div>
                        </div>
                    ) : null
                }

                {!this.state.isshowList ? null : (
                    <ul className="mod_search_result_list">
                        <li className="mod_search_result_list_con" onClick={() => { this.toPlay() }}>
                            <div className="music_icon"><img src={this.state.bgImg} alt="" /></div>
                            <div>
                                <p className="mod_search_result_list_tit">{this.state.first.songName}</p>
                                <p className="mod_search_result_list_singer">{this.state.singer.map((item) => {
                                    return <span key={item.singerMid}>{item.singerName}</span>
                                })}
                                </p>
                            </div>
                        </li>
                        {el}
                        <li className="lookMore" onClick={() => this.showMore()}>查看更多搜索结果</li>
                    </ul >
                )}




            </div>
        )
    }
}
export default Search