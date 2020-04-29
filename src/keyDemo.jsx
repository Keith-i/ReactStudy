import React, { Component } from 'react'

class keyDemo extends Component {

  constructor() {
    super()
    this.state = {
      userInfo: [
        {
          name: 'Keith',
          age: 22,
          sex: '男',
          hobby: ['爬山', '游泳', '看书']
        },
        {
          name: 'Jenny',
          age: 22,
          sex: '女',
          hobby: ['美食', '旅游', '购物']
        },
        {
          name: 'Tom',
          age: 22,
          sex: '男',
          hobby: ['美女', '二次元', '游戏']
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <p>列表渲染</p>
        <ul>
          {
            this.state.userInfo.map((item, index) => {
              return (
                <li key={index}>
                  <span>{item.name}</span>&nbsp;&nbsp;
                  <span>{item.age}</span>&nbsp;&nbsp;
                  <span>{item.sex}</span>
                  <div>
                    {
                      item.hobby.map((childItem, childIndex) => {
                        return <i key={childIndex}>{childItem + ' '}</i>
                      })
                    }
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default keyDemo