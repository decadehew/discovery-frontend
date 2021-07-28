class Product extends React.Component {
  
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  }

  render () {
    const {
      title, description, url,
      votes, submitterAvatarUrl,
      productImageUrl
    } = this.props;

    return (
      <div className='item'>
        <div className='image'>
          <img src={productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {votes}
          </div>
          <div className='description'>
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    )
  }
}

class ProductList extends React.Component {
  // 由於此 component 沒有使用 props，可以不用寫，
  // 建議寫，避免不必要問題出現
  constructor (props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount () {
    this.setState({ products: Seed.products });
  }

  handleProductUpVote = (productId) => {
    const products = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        });
      } else return product;
    });

    this.setState({ products });
  }

  render () {
    const products = this.state.products.sort((a, b) => b.votes - a.votes);
    const productComponents = products.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));
    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    )
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
