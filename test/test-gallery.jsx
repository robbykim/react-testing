var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var Gallery = require('../js/gallery.jsx');
var Image = require('../js/image.jsx');
var renderer = TestUtils.createRenderer();

describe('Gallery component', function() {
  it('Should have the correct class name', function() {
    renderer.render(<Gallery images={[]}/>)
    var result = renderer.getRenderOutput();
    result.props.className.should.equal('gallery');
  })

  it('Should have the correct number of Images rendered', function() {
    var image1 = {
      url: "www.example.com/image1",
      description: "image1"
    }
    renderer.render(<Gallery images={[image1]} />)
    var result = renderer.getRenderOutput();
    console.log(result.props.children.length, "children.length");
    // result.props.should.equal('gallery')
  })

  it('Should have the correct props set for each image', function() {

  })

})
