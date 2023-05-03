// **************************************************************************
// 02. Static

// import { Component } from 'react';

// import '../styles/profilecards.css';

// export default class ProfileCards extends Component {
//     render() {
//         return (
//             <div className="pc-main-container">
//                 <div className="pc-section-container">
//                     <div className="pc-card-container">
//                         <div className="pc-image-border-container">
//                             <div className="pc-image-container">
//                                 <img className="pc-image" src="https://static-00.iconduck.com/assets.00/profile-2-icon-256x256-bvh7xwyf.png"  alt="profile" />
//                             </div>
//                         </div>
//                         <div className="pc-header-border-container">
//                             <div className="pc-header-container">
//                                 <h4>First Last</h4>
//                                 <h6>CEO of Company</h6>
//                             </div>
//                         </div>
//                         <div className="pc-description-border-container">
//                             <div className="pc-description-inner-container">
//                                 <div className="pc-description-container">
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nisi est sit amet facilisis magna.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


// **************************************************************************
// 02. Dynamic - one user - statically passing states to pre-created props

import { Component } from 'react';

import '../styles/profilecards.css';

export default class ProfileCards extends Component {
    
    constructor() {
        super();
        this.state = {
            userProfile1 : {
                    id: 1,
                    name: "First1 Last1",
                    position: "CEO of Company",
                    image: "https://static-00.iconduck.com/assets.00/profile-2-icon-256x256-bvh7xwyf.png",
                    description: "Lorem1 ipsum1 dolor1 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nisi est sit amet facilisis magna."
            },
            userProfile2 : {
                id: 2,
                name: "First2 Last2",
                position: "COO of Company",
                image: "https://static-00.iconduck.com/assets.00/profile-2-icon-256x256-bvh7xwyf.png",
                description: "Lorem2 ipsum2 dolor2 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nisi est sit amet facilisis magna."
            },
            userProfile3 : {
                id: 3,
                name: "First3 Last3",
                position: "CFO of Company",
                image: "https://static-00.iconduck.com/assets.00/profile-2-icon-256x256-bvh7xwyf.png",
                description: "Lorem3 ipsum3 dolor3 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nisi est sit amet facilisis magna."
            },
            userProfile4 : {
                id: 4,
                name: "First4 Last4",
                position: "CIO of Company",
                image: "https://static-00.iconduck.com/assets.00/profile-2-icon-256x256-bvh7xwyf.png",
                description: "Lorem4 ipsum4 dolor4 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nisi est sit amet facilisis magna."
            },
            userProfile3 : {
                id: 5,
                name: "First5 Last5",
                position: "CTO of Company",
                image: "https://static-00.iconduck.com/assets.00/profile-2-icon-256x256-bvh7xwyf.png",
                description: "Lorem5 ipsum5 dolor5 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nisi est sit amet facilisis magna."
            },
            userProfile6 : {
                id: 6,
                name: "First6 Last6",
                position: "CCO of Company",
                image: "https://static-00.iconduck.com/assets.00/profile-2-icon-256x256-bvh7xwyf.png",
                description: "Lorem6 ipsum6 dolor6 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nisi est sit amet facilisis magna."
            }
        }
    }

    render() {
        return (
            <div className="pc-main-container">
                <div className="pc-section-container">
                    
                    <div className="pc-card-container">
                        <div className="pc-image-border-container">
                            <div className="pc-image-container">
                                <img className="pc-image" src={this.state.userProfile1["image"]}  alt="profile" />
                            </div>
                        </div>
                        <div className="pc-header-border-container">
                            <div className="pc-header-container">
                                <h4>{this.state.userProfile1["name"]}</h4>
                                <h6>{this.state.userProfile1["position"]}</h6>
                            </div>
                        </div>
                        <div className="pc-description-border-container">
                            <div className="pc-description-inner-container">
                                <div className="pc-description-container">
                                    <p>{this.state.userProfile1["description"]}</p>
                                </div>
                            </div>
                        </div>    
                    </div>

                    <div className="pc-card-container">
                        <div className="pc-image-border-container">
                            <div className="pc-image-container">
                                <img className="pc-image" src={this.state.userProfile2["image"]}  alt="profile" />
                            </div>
                        </div>
                        <div className="pc-header-border-container">
                            <div className="pc-header-container">
                                <h4>{this.state.userProfile2["name"]}</h4>
                                <h6>{this.state.userProfile2["position"]}</h6>
                            </div>
                        </div>
                        <div className="pc-description-border-container">
                            <div className="pc-description-inner-container">
                                <div className="pc-description-container">
                                    <p>{this.state.userProfile2["description"]}</p>
                                </div>
                            </div>
                        </div>    
                    </div>

                    <div className="pc-card-container">
                        <div className="pc-image-border-container">
                            <div className="pc-image-container">
                                <img className="pc-image" src={this.state.userProfile3["image"]}  alt="profile" />
                            </div>
                        </div>
                        <div className="pc-header-border-container">
                            <div className="pc-header-container">
                                <h4>{this.state.userProfile3["name"]}</h4>
                                <h6>{this.state.userProfile3["position"]}</h6>
                            </div>
                        </div>
                        <div className="pc-description-border-container">
                            <div className="pc-description-inner-container">
                                <div className="pc-description-container">
                                    <p>{this.state.userProfile3["description"]}</p>
                                </div>
                            </div>
                        </div>    
                    </div>

                    <div className="pc-card-container">
                        <div className="pc-image-border-container">
                            <div className="pc-image-container">
                                <img className="pc-image" src={this.state.userProfile4["image"]}  alt="profile" />
                            </div>
                        </div>
                        <div className="pc-header-border-container">
                            <div className="pc-header-container">
                                <h4>{this.state.userProfile4["name"]}</h4>
                                <h6>{this.state.userProfile4["position"]}</h6>
                            </div>
                        </div>
                        <div className="pc-description-border-container">
                            <div className="pc-description-inner-container">
                                <div className="pc-description-container">
                                    <p>{this.state.userProfile4["description"]}</p>
                                </div>
                            </div>
                        </div>    
                    </div>

                    <div className="pc-card-container">
                        <div className="pc-image-border-container">
                            <div className="pc-image-container">
                                <img className="pc-image" src={this.state.userProfile5["image"]}  alt="profile" />
                            </div>
                        </div>
                        <div className="pc-header-border-container">
                            <div className="pc-header-container">
                                <h4>{this.state.userProfile5["name"]}</h4>
                                <h6>{this.state.userProfile5["position"]}</h6>
                            </div>
                        </div>
                        <div className="pc-description-border-container">
                            <div className="pc-description-inner-container">
                                <div className="pc-description-container">
                                    <p>{this.state.userProfile5["description"]}</p>
                                </div>
                            </div>
                        </div>    
                    </div>

                    <div className="pc-card-container">
                        <div className="pc-image-border-container">
                            <div className="pc-image-container">
                                <img className="pc-image" src={this.state.userProfile6["image"]}  alt="profile" />
                            </div>
                        </div>
                        <div className="pc-header-border-container">
                            <div className="pc-header-container">
                                <h4>{this.state.userProfile6["name"]}</h4>
                                <h6>{this.state.userProfile6["position"]}</h6>
                            </div>
                        </div>
                        <div className="pc-description-border-container">
                            <div className="pc-description-inner-container">
                                <div className="pc-description-container">
                                    <p>{this.state.userProfile6["description"]}</p>
                                </div>
                            </div>
                        </div>    
                    </div>

                </div>
            </div>
        )
    }
}

// *******************************************************************************
// 03. Dynamically create elements using for loops

   