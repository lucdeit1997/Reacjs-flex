import React, { Component } from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native'

export class FleirectionBasics extends Component {
  render() {
    return (
      <SafeAreaView style= { styleMain.wraper }>
        <View style={ styleMain.header }>
          <View style={ styleMain.header_left}> 
            <Text>1</Text>
          </View>
          <View style={ styleMain.header_right}>
            <View style={ styleMain.header_right__top }>
              <Text>2</Text>
            </View>
            <View style={ styleMain.header_right__bottom }>
              <View style={ styleMain.header_right__bottom_left }>
                <Text>3</Text>
              </View>
              <View style={ styleMain.header_right__bottom_right }>
                <View style={ styleMain.header_right__bottom_right_top }>
                  <Text>4</Text>
                </View>
                <View style={ styleMain.header_right__bottom_right_bottom }>
                  <Text>5</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/*container */}
        <View style={ styleMain.container }>
          <View style={ styleMain.container_left}>
            <View style={ styleMain.container_left__top }>
              <Text>6</Text>
            </View>
            <View style={ styleMain.container_left__bottom }>
              <Text>7</Text>
            </View>
          </View>
          <View style={ styleMain.container_right}>
            <Text>8</Text>
          </View>
        </View>

        <View style={ styleMain.footer }>
          <View style={ styleMain.footer_left}>
            <View style={ styleMain.footer_left__top}>
              <Text>9</Text>
            </View>
            <View style={ styleMain.footer_left__bottom}>
              <View style={ styleMain.footer_left__bottom_left}>
                <Text>10</Text>
              </View>
              <View style={ styleMain.footer_left__bottom_right}>
                <Text>11</Text>
              </View>
            </View>
          </View>
          <View style={ styleMain.footer_right}>
            <View style={ styleMain.footer_right_top}>
              <View style={ styleMain.footer_right_top_left}>
               <Text>12</Text>
              </View>
              <View style={ styleMain.footer_right_top_right}>
                <View style={ styleMain.footer_right_top_right_top}>
                  <Text>13</Text>
                </View>
                <View style={ styleMain.footer_right_top_right_bottom}>
                  <Text>14</Text>
                </View>
              </View>
            </View>

            <View style={ styleMain.footer_right_bottom}>
              <View style={ styleMain.footer_right_bottom_left}>
                <Text>15</Text>
              </View>

              <View style={ styleMain.footer_right_bottom_center}>
                <Text>16</Text>
              </View>

              <View style={ styleMain.footer_right_bottom_right}>
                <Text>17</Text>
              </View>

            </View>

          </View>
        </View>
      </SafeAreaView>
    )
  }
}

let styleMain = StyleSheet.create({
  wraper: {
    flex: 1,
    flexDirection: 'column',
    width: '100%'
  },

  header: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: 'row',
  },

  header_left: {
    flex:1,
    backgroundColor: "white",
    flexDirection: 'row',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header_right: {
    flex: 3,
    flexDirection: 'column',
  },
  header_right__top: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: 'flex-start',
    alignItems:'flex-end'
  },

  header_right__bottom: {
    flex: 1,
    flexDirection: 'row'
  },

  header_right__bottom_left: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },

  header_right__bottom_right: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: 'column'
  },

  header_right__bottom_right_top: {
    flex:1,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },

  header_right__bottom_right_bottom: {
    flex:1,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  
  container: {
    flex: 1,
    flexDirection: 'row'
    // backgroundColor: "green",
  },

  container_left: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1
  },

  container_left__top: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
   justifyContent: 'flex-end'
  },

  container_left__bottom: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },

  container_right: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  footer: {
    flex: 2,
    flexDirection: 'row'
  },

  footer_left: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1
  },

 

  footer_left__top: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },

  footer_left__bottom: {
    flex: 3,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row'
  },

  footer_left__bottom_left: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1
  },

  footer_left__bottom_right: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  footer_right: {
    flex: 2,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'column'
  },
  
  footer_right_top: {
    flex: 1,
    flexDirection: 'row'
  },

  footer_right_top_left: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  footer_right_top_right: {
    flex: 2,
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 1,
  },
  
  footer_right_top_right_top: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'flex-end',
    justifyContent: "flex-end"
  },

  footer_right_top_right_bottom: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },

  footer_right_bottom: {
    flex: 1,
    flexDirection: 'row'
  },
  footer_right_bottom_left:{
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  footer_right_bottom_center:{
    flex: 2,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems:'flex-end'
  },
  footer_right_bottom_right:{
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems:'center'
  },

})

export default FleirectionBasics
