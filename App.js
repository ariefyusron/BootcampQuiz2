import React, {Component} from 'react';
import { FlatList,TouchableOpacity,StyleSheet } from 'react-native';
import { Container, Text, Input, Row, Col, Content, Button, Item, List, ListItem, Header, Title } from 'native-base';

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
        <Header style={styles.header}>
          <Title style={{color:'black'}}>TO DO APP</Title>
        </Header>
        <Content style={{marginTop:5}}>
          <Row style={{justifyContent:'center'}}>
            <Col style={{flex:0.98}}>
              <Item style={{borderBottomColor:'white'}}>
                <Input value={this.state.set} onSubmitEditing={this.add} onChangeText={(text)=>this.set(text)} placeholder='Type to add to do List' style={styles.input} />
                <Button onPress={this.add} style={styles.button}>
                  <Text>Add</Text>
                </Button>
              </Item>
            </Col>
          </Row>
          <FlatList
            data={this.state.data}
            renderItem={
              ({item, index}) =>
                <ListItem style={styles.listitem}>
                  <TouchableOpacity style={styles.touch} onLongPress={()=>this.delete(index)}>
                    <Text style={{width:100+'%'}}>{item}</Text>
                  </TouchableOpacity>
                </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems:'center',
    backgroundColor:'white'
  },
  input: {
    backgroundColor:'#F8F8FF',
    height:'80%',
    borderRadius:10
  },
  button: {
    height:'80%',
    alignSelf:'center',
    borderRadius:10,
    marginLeft:5,
    backgroundColor:'grey'
  },
  listitem: {
    paddingBottom:0,
    paddingTop:0,
    height:50
  },
  touch: {
    flex:1,
    height:100+'%',
    justifyContent:'center'
  },
});
