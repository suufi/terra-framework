# Terra InfiniteList - Progressive Loading

To limit the impact of large data sets, progressive loading of list items is available through the InfiniteList. As the InfiniteList approaches the bottom of its scrollHeight the `onRequestItems` callback will execute, allowing the implementation to lazy load data into the list.

## State Management
First we'll be defaulting our state to an empty array of items, a null page key, and false for isFinishedLoading in the constructor. 
```jsx
  constructor(props) {
    super(props);

    this.state = { isFinishedLoading: false, currentPageKey: null, items: [] };
  }
```
In our data request callback we'll pass our parameters of our page key, then wait for the response returned from our async service. Upon receiving the response we'll map our returned paging indicators and add our new items to our existing state.
```jsx
  requestData() {
    mockRequest(this.state.currentPageKey).then(response => (
      this.setState(prevState => ({
        isFinishedLoading: response.isFinalPage,
        currentPageKey: response.nextPageKey,
        items: prevState.items.concat(response.items),
      }))
    ));
  }
```
## Unpack Data
We can then implement the unpack of our state data into our list items. Provide unique key value to prop `key`, if internal state of `InfiniteList` needs to be updated.
```jsx
  createItems() {
    return this.state.items.map(item => (
      <Item key={item.key}>
        <Placeholder title={item.title} />
      </Item>
    ));
  }
```
Finally we'll declare our infinite list looping. Providing the InfiniteList with an `initialLoadingIndicator` and `progressiveLoadingIndicator`. The infinite list does not have visual styling, so loading indicators are customizable. Followed up with setting the `onRequestItems` to our requestData method.
```jsx
  render() {
    return (
      <MyExampleContainer>
        <InfiniteList
          dividerStyle="standard"
          isFinishedLoading={this.state.isFinishedLoading}
          onRequestItems={this.requestData}
          initialLoadingIndicator={<MyInitialLoadingIndicator />}
          progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}
        >
          {this.createItems()}
        </InfiniteList>
      </MyExampleContainer>
    );
  }
```

Using these steps we get the following example:
