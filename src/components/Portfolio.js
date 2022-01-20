import React, { Component } from "react";
import Nav from "./Nav";

class Portfolio extends Component {

    state = {
      currentPage: "About"
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  
    renderPage = () => {
    //   if (this.state.currentPage === "Project") {
    //     return <Project />;
    //   } else if (this.state.currentPage === "About") {
    //     return <About />;
    //   } else if (this.state.currentPage === "Blog") {
    //     return <Blog />;
    //   } else {
    //     return <Contact />;
    //   };
    };
  
    render() {
      return (
        <div>
          {/* <Header/> */}
  
          <Nav
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </div>
      );
    };
  };
  
  export default Portfolio;
  