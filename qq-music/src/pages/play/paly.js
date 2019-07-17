import React, { Component } from 'react'
import './play.css'
import { songLrc, albumImg, songUrllist } from '../../utli/API'
import $ from 'jquery'
import '../../../public/static/icon/iconfont.css'
class Play extends Component {
    constructor(props) {

        super()
        // console.log(props)
        this.state = {
            songLrc: [],
            songname: props.location.state.item.songName,
            singer: props.location.state.item.singer[0].singerName,
            albumImg: {
                albummid: props.location.state.item.albumMid,
                singerMid: props.location.state.item.albumMid
            },
            bgImg: '',
            url: '',
            time: '',
            isPlay: true,
            isshow: false
        }

    }

    componentDidMount() {

        // console.log(this.props.match.params.id)
        this.$http({
            url: songLrc + this.props.match.params.id
        }).then(d => {
            // console.log(d)
            // console.log(d.data.data.lyric);
            var arr = d.data.data.lyric.split('[换行]');
            var newArr = [];

            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split(']');
                var key = arr2[0].substr(1);
                var value = arr2[1];
                if (value === '') {
                    continue
                }
                key = key.substr(0, 5)
                var json = {
                    key: key,
                    value: value
                }
                newArr.push(json)
            }
            this.setState({
                songLrc: newArr
            })
            // console.log(newArr)
        })
        // 获取歌词头像、封面
        // URL：/albumImg/{:albummid}/{:singerMid}
        this.$http({
            url: albumImg + this.state.albumImg.albummid + '/' + this.state.albumImg.singerMid
            // params: this.state.albumImg
        }).then(d => {
            // console.log(d)
            this.setState({
                bgImg: d.data.data.albumImgUrl
            })
        })
        // 音频
        this.$http({
            url: songUrllist + this.props.location.state.item.songMid
        }).then(d => {
            // console.log(d)
            this.setState({
                url: d.data.data
            })
        })
        // 播放:
        // console.log($("audio")[0], $('.lyric '), $('.lyric__bd '))
        if (!this.state.isshow) {
            var that = this;
            var num = 0;
            $("audio")[0].ontimeupdate = function () {
                var currentTime = $("audio")[0].currentTime;//3.123  00:03
                var minute = Math.floor(currentTime / 60) < 10 ? '0' + Math.floor(currentTime / 60) : Math.floor(currentTime / 60);
                var second = Math.floor(currentTime % 60) < 10 ? '0' + Math.floor(currentTime % 60) : Math.floor(currentTime % 60);
                var time = minute + ":" + second;//00:04
                // console.log(time)
                that.setState({
                    time:time
                })

                for (var i = 0; i < $('.lyric__bd ')[0].children.length; i++) {
                    if ($('.lyric__bd ')[0].children[i].getAttribute('time') === that.state.time) {
                        $('.lyric__bd ')[0].children[i].style = 'color:#31c27c'
                        num = i;
                        break;
                    }
                }
                // console.log(num)
                $('.lyric__bd ')[0].style.top = (-(num)) * (0.6) + "rem"

            }
        }
    }
    toggle() {
        this.setState({
            isshow: !this.state.isshow
        })
    }
    playPause() {
        var audio = $('audio')[0];
        // console.log($('audio')[0].paused)
        //改变暂停/播放icon

        if (audio.paused) {
            audio.play();
            this.setState({
                isPlay: true
            })
        } else {
            audio.pause();
            this.setState({
                isPlay: false
            })
        }
    }

    render() {
        // console.log(this.state.url)


        return (
            <div className="play">
                {/* 固定导航 */}
                <div className="play_top_bar">
                    <div className="play_top_bar__box">
                        <span className="play_top_bar__media top_bar__media--square">
                            <img src="https://y.gtimg.cn/music/common/upload/t_playsong_ad/1207759.png?max_age=2592000" alt="" className="top_bar__media_img" />
                        </span>
                        <div className="play_top_bar__bd">
                            <h2 className="play_top_bar__tit">千万正版音乐  海量无损曲库</h2>
                        </div>
                        <a href="" className="play_top_bar__btn">立即使用</a>
                    </div>
                </div>
                {/* 歌词 */}
                <div className="main js_main">
                    <div className="main__bd">
                        <div className="song_info">
                            <div className="song_info__hd">
                                <h1 className="song_name">
                                    <span className="song_name__text js_song_name">
                                        {/* You Need To Calm Down */}
                                        {this.state.songname}
                                    </span>
                                </h1>
                                <h2 className="singer_name js_singer_name js_singer">
                                    {/* Taylor Swift */}
                                    {this.state.singer}
                                </h2>
                            </div>
                            <div className="song_info__bd js_toggle_cover js_tj"
                                // onClick={this.toggle.bind(this)}
                                onClick={() => { this.toggle() }}
                            >

                                {
                                    this.state.isshow ? (
                                        <div className="album_cover js_cover fade_out">
                                            <img src={this.state.bgImg} alt="" />
                                        </div>
                                    ) : (
                                            <div className="lyric js_lrc fade_in">
                                                <div className="lyric__bd js_lrc_bd" >
                                                    {/* 歌词 */}
                                                    {
                                                        this.state.songLrc.length !== 0 ?
                                                            (this.state.songLrc.map((item, index) => {
                                                                return <p className="songDetails" key={index} time={item.key}>{item.value}</p>
                                                            })
                                                            ) : null
                                                    }
                                                </div>
                                                {/* <a href="" className="lyric__more js_lrc_more js_openmusic js_tj">查看翻译歌词</a> */}
                                            </div>
                                        )
                                }



                            </div>
                            <div className="opt">
                                <span className="opt_icon opt_icon_mv">mv</span>
                                {/* <span className="opt_icon opt_icon_play iconfont iconbofang" onClick={() => this.playPause()}></span> */}
                                {
                                    this.state.isPlay ? (<span className="opt_icon opt_icon_play iconfont iconiconstop" onClick={() => this.playPause()}></span>) : (<span className="opt_icon opt_icon_play iconfont iconbofang" onClick={() => this.playPause()}></span>)
                                }
                                {/* iconiconstop iconbofang*/}
                                <span className="opt_icon opt_icon_aixin">♡</span>
                            </div>
                            <span className="btn_download js_download js_tj">
                                下载歌曲
                            </span>
                            <div className="audio_box">
                                <audio src={this.state.url}  autoPlay ref='audio'></audio>
                            </div>
                            {/* autoPlay controls*/}
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}
export default Play