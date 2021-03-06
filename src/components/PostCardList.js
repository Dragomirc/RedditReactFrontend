import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import PostCard from "./PostCard";

class PostCardList extends Component {
  renderPosts = ({ title, text, votes, comments, id }) => (
    <PostCard
      key={id}
      title={title}
      text={text}
      votes={votes}
      comments={comments}
      id={id}
    />
  );

  render() {
    return <ul>{_.map(this.props.posts, this.renderPosts)}</ul>;
  }
}
const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(PostCardList);
