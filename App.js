import React, {Component} from 'react';
import { FlatList,TouchableOpacity } from 'react-native';
import { Container, Text, Input, Row, Col, Content, Button, Item, List, ListItem } from 'native-base';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      set: '',
      data: []
    };
  }

  add = () => {
    set = this.state.set;
    if(set.length>0){
      data = this.state.data.concat([set]);
      this.setState({data:data});
      this.setState({set:''})
    } else{
      alert('Please input your to do.')
    }
  }

  set(text){
    this.setState({set:text});
  }

  delete(i){
    data = this.state.data.slice();
    data.splice(i,1);
    this.setState({data:data});
  }

  render() {
    return (
      <Container>
        <Content>
          <Row style={{justifyContent:'center'}}>
            <Col style={{flex:0.9}}>
              <Item style={{borderBottomColor:'white'}}>
                <Input value={this.state.set} onChangeText={(text)=>this.set(text)} placeholder='Type to add to do List' style={{backgroundColor:'red',}} />
                <Button onPress={this.add} style={{height:'100%'}}>
                  <Text>Add</Text>
                </Button>
              </Item>
            </Col>
          </Row>
          <FlatList
            data={this.state.data}
            renderItem={
              ({item, index}) =>
                <ListItem style={{paddingBottom:0,paddingTop:0,height:50}}>
                  <TouchableOpacity style={{flex:1,height:100+'%',justifyContent:'center'}} onLongPress={()=>this.delete(index)}>
                    <Text style={{backgroundColor:'red',width:100+'%'}}>{item}</Text>
                  </TouchableOpacity>
                </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}
