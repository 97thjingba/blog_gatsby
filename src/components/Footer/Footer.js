import React,{Component} from "react"
import {Container} from "reactbulma";
import { FaGithub, FaTencentWeibo } from 'react-icons/fa';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                        <p className="subtitle has-text-black is-7">永远年轻,永远热泪盈眶.   —— Jack Kerouac 《达摩流浪者》</p>
                        <p className="has-text-primary subtitle is-6">Build with gatsby -- by Peking</p>
                        <a href="https://github.com/97thjingba/blog_gatsby"><FaGithub size="1.5rem" /></a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;