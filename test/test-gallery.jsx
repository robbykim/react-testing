var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var Gallery = require('../js/gallery.jsx');
var Image = require('../js/image.jsx');
var renderer = TestUtils.createRenderer();

describe('Gallery component', function() {
  it('Should have the correct class name', function() {
    renderer.render(<Gallery images={[]}/>);
    var result = renderer.getRenderOutput();
    result.props.className.should.equal('gallery');
  });

  it('Should have the correct number of Images rendered', function() {
    var image1 = {
      url: "www.example.com/image1",
      description: "image1"
    };
    renderer.render(<Gallery images={[image1]} />);
    var result = renderer.getRenderOutput();
    result.props.children.length.should.equal(1);
  });

  it('Should have the correct props set for each image', function() {
    var image1 = {
      url: 'www.example.com/image1',
      description: 'image1'
    }
    var image2 = {
      url: 'www.example.com/image2',
      description: 'image2'
    }

    var images = [image1, image2];
    renderer.render(<Gallery images={images} />);
    var result = renderer.getRenderOutput();

    var img1 = result.props.children[0];
    img1.props.url.should.equal(image1.url);
    img1.props.description.should.equal(image1.description);

    var img2 = result.props.children[1];
    img2.props.url.should.equal(image2.url);
    img2.props.description.should.equal(image2.description);

  });

});
