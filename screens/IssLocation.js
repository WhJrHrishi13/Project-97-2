import React, { Component } from 'react';
import { Text, View , FlatList} from 'react-native';
import db from "../config";
export default class IssLocationScreen extends Component {
constructor(props) {
    super(props);
    this.state = {
      allBooks: [],
      searchText: ""
    };
  }
  componentDidMount = async () => {
    this.getBooks();
  };

  
  getBooks = () => {
    db.collection("books")
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          this.setState({
            allBooks: [...this.state.allBooks, doc.data()],
          });
        });
      });
  };
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>ISS Location Screen!</Text>
      
      <View>
       <FlatList
            data={allBooks}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
      </View>
       </View>
    );
  }
}
