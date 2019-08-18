import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { initAuth } from '../app/services/auth'
initAuth()

class IndexPage extends React.Component {
  state = { loading: false, msg: null }
  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
        <div class="content-wrapper">
            <div class="content-heading">
               <div>Celebrating Global Heritage<small data-localize="dashboard.WELCOME">Passing down traditions!</small></div><!-- START Language list-->
               <div class="ml-auto">
                  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle dropdown-toggle-nocaret" type="button" data-toggle="dropdown">English</button>
                     <div class="dropdown-menu dropdown-menu-right-forced animated fadeInUpShort" role="menu"><a class="dropdown-item" href="#" data-set-lang="en">English</a><a class="dropdown-item" href="#" data-set-lang="es">Spanish</a></div>
                  </div>
               </div><!-- END Language list-->
            </div><!-- START cards box-->
<!-- END cards box-->
         
         
               <!-- START dashboard main content-->
               <div class="col-xl-12">
                     <h3>Recently Added</h3>

                     <div class="row">
          
                     <div class="col-xl-4 col-lg-6">
                           <div class="card b">
                              <div class="card-header">
                                 <div class="float-right">
                                    <div class="badge badge-info">Popular</div>
                                    <div class="badge badge-danger">New</div>
                                 </div>
                                 <h4 class="m-0">Santana - Oye Como Va</h4><small class="text-muted">&nbsp;</small>
                              </div>
                              <div class="card-body">
                                 <div class="d-flex align-items-center">
                                    <img class="card-image" src="img/music/cincodemayo.png" alt="cinco de mayo">
                                 </div>
                              </div>
                              <table class="table">
                                 <tbody>
                                    <tr>
                                       <td><strong>Source Link</strong></td>
                                       <td><a href="">Santana - Oye Como Va</a></td>
                                    </tr>
                                    <tr>
                                       <td><strong>Related content</strong></td>
                                       <td>
                                          <a href="" data-toggle="tooltip" data-title="Dances" data-original-title="" title=""><em class="fas fa-hands">&nbsp;</em></a>
                                          <a href="" data-toggle="tooltip" data-title="Dresses" data-original-title="" title=""><em class="fas fa-female">&nbsp;</em></a>
                                          <a href="" data-toggle="tooltip" data-title="Festivals" data-original-title="" title=""><em class="fas fa-moon">&nbsp;</em></a>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <div class="card-footer text-center"><button class="btn btn-secondary" type="button"><a href="festival-cincodemayo.html">More details</a></button></div>
                           </div>
         
                        </div>
                        <div class="col-xl-4 col-lg-6">
                              <div class="card b">
                                 <div class="card-header">
                                    <div class="float-right">
                                       <div class="badge badge-info">Popular</div>
                                       <div class="badge badge-danger">New</div>
                                    </div>
                                    <h4 class="m-0">Cinco De Mayo</h4><small class="text-muted">A celebration of mexican culture</small>
                                 </div>
                                 <div class="card-body">
                                    <div class="d-flex align-items-center">
                                       <img class="card-image" src="img/festivals/cincodemayo.jpg" alt="cinco de mayo">
                                    </div>
                                 </div>
                                 <table class="table">
                                    <tbody>
                                       <tr>
                                          <td><strong>Next on</strong></td>
                                          <td>May 5, 2020</td>
                                       </tr>
                                       <tr>
                                          <td><strong> Regions celebrated in</strong></td>
                                          <td><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/countries/mx.png" alt="mexico"></a><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/countries/us.jpg" alt="project member"></a><a class="inline" href="#"><strong>+5</strong></a></td>
                                       </tr>
                                       <tr>
                                          <td><strong> Celebrated by</strong></td>
                                          <td><a href="" data-toggle="tooltip" data-title="Team leader" data-original-title="" title=""><img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member"></a><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member"></a><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/user/01.jpg" alt="project member"></a><a class="inline" href="#"><strong>&nbsp;+ 1,389</strong></a></td>
                                       </tr>
                                       <tr>
                                          <td><strong>Related content</strong></td>
                                          <td>
                                             <a href="" data-toggle="tooltip" data-title="Dances" data-original-title="" title=""><em class="fas fa-hands">&nbsp;</em></a>
                                             <a href="" data-toggle="tooltip" data-title="Dresses" data-original-title="" title=""><em class="fas fa-female">&nbsp;</em></a>
                                             <a href="" data-toggle="tooltip" data-title="Music" data-original-title="" title=""><em class="fas fa-music">&nbsp;</em></a>
                                             <a href="" data-toggle="tooltip" data-title="Recipes" data-original-title="" title=""><em class="fas fa-utensils">&nbsp;</em></a>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <div class="card-footer text-center"><button class="btn btn-secondary" type="button"><a href="festival-cincodemayo.html">More details</a></button></div>
                              </div>
                           </div>
                           <div class="col-xl-4 col-lg-6">
                                 <div class="card b">
                                    
                                    <div class="card-body">
                                       <div class="d-flex align-items-center card-footer" style="height: 160px; justify-content: center;">
                                             <button class="btn btn-secondary" type="button"><a href="festivals.html">+16 More</a></button>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </div>         
            
                     </div>
                     <h3>Popular</h3>
                     <div class="row">
                           <div class="col-xl-4 col-lg-6">
                                 <div class="card b">
                                    <div class="card-header">
                                       <div class="float-right">
                                          <div class="badge badge-info">Popular</div>
                                          <div class="badge badge-danger"></div>
                                       </div>
                                       <h4 class="m-0">Ramadan</h4><small class="text-muted">&nbsp;</small>
                                    </div>
                                    <div class="card-body">
                                       <div class="d-flex align-items-center">
                                          <img class="card-image" src="img/festivals/ramadan.jpg" alt="Diwali">
                                       </div>
                                    </div>
                                    <table class="table">
                                       <tbody>
                                          <tr>
                                             <td><strong>Next on</strong></td>
                                             <td>October 27, 2019</td>
                                          </tr>
                                          <tr>
                                             <td><strong> Regions celebrated in</strong></td>
                                             <td><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/countries/in.png" alt="mexico"></a><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/countries/us.jpg" alt="project member"></a><a class="inline" href="#"><strong>+25</strong></a></td>
                                          </tr>
                                          <tr>
                                             <td><strong> Celebrated by</strong></td>
                                             <td><a href="" data-toggle="tooltip" data-title="Team leader" data-original-title="" title=""><img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member"></a><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member"></a><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/user/01.jpg" alt="project member"></a><a class="inline" href="#"><strong>&nbsp;+ 8,182</strong></a></td>
                                          </tr>
                                          <tr>
                                             <td><strong>Related content</strong></td>
                                             <td>
                                                <a href="" data-toggle="tooltip" data-title="Dances" data-original-title="" title=""><em class="fas fa-hands">&nbsp;</em></a>
                                                <a href="" data-toggle="tooltip" data-title="Dresses" data-original-title="" title=""><em class="fas fa-female">&nbsp;</em></a>
                                                <a href="" data-toggle="tooltip" data-title="Music" data-original-title="" title=""><em class="fas fa-music">&nbsp;</em></a>
                                                <a href="" data-toggle="tooltip" data-title="Recipes" data-original-title="" title=""><em class="fas fa-utensils">&nbsp;</em></a>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <div class="card-footer text-center"><button class="btn btn-secondary" type="button"><a href="festival-diwali.html">More details</a></button></div>
                                 </div>
                              </div>
                              <div class="col-xl-4 col-lg-6">
                                    <div class="card b">
                                       <div class="card-header">
                                          <div class="float-right">
                                             <div class="badge badge-info">Popular</div>
                                             <div class="badge badge-danger"></div>
                                          </div>
                                          <h4 class="m-0">Diwali</h4><small class="text-muted">A festival of lights</small>
                                       </div>
                                       <div class="card-body">
                                          <div class="d-flex align-items-center">
                                             <img class="card-image" src="img/festivals/diwali.jpg" alt="Diwali">
                                          </div>
                                       </div>
                                       <table class="table">
                                          <tbody>
                                             <tr>
                                                <td><strong>Next on</strong></td>
                                                <td>October 27, 2019</td>
                                             </tr>
                                             <tr>
                                                <td><strong> Regions celebrated in</strong></td>
                                                <td><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/countries/in.png" alt="mexico"></a><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/countries/us.jpg" alt="project member"></a><a class="inline" href="#"><strong>+25</strong></a></td>
                                             </tr>
                                             <tr>
                                                <td><strong> Celebrated by</strong></td>
                                                <td><a href="" data-toggle="tooltip" data-title="Team leader" data-original-title="" title=""><img class="rounded-circle thumb24" src="img/user/03.jpg" alt="project member"></a><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/user/02.jpg" alt="project member"></a><a class="inline" href="#"><img class="rounded-circle thumb24" src="img/user/01.jpg" alt="project member"></a><a class="inline" href="#"><strong>&nbsp;+ 8,182</strong></a></td>
                                             </tr>
                                             <tr>
                                                <td><strong>Related content</strong></td>
                                                <td>
                                                   <a href="" data-toggle="tooltip" data-title="Dances" data-original-title="" title=""><em class="fas fa-hands">&nbsp;</em></a>
                                                   <a href="" data-toggle="tooltip" data-title="Dresses" data-original-title="" title=""><em class="fas fa-female">&nbsp;</em></a>
                                                   <a href="" data-toggle="tooltip" data-title="Music" data-original-title="" title=""><em class="fas fa-music">&nbsp;</em></a>
                                                   <a href="" data-toggle="tooltip" data-title="Recipes" data-original-title="" title=""><em class="fas fa-utensils">&nbsp;</em></a>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                       <div class="card-footer text-center"><button class="btn btn-secondary" type="button"><a href="festival-diwali.html">More details</a></button></div>
                                    </div>
                           </div>
                           <div class="col-xl-4 col-lg-6">
                                 <div class="card b">
                                    
                                    <div class="card-body">
                                       <div class="d-flex align-items-center card-footer" style="height: 160px; justify-content: center;">
                                             <button class="btn btn-secondary" type="button"><a href="festivals.html">+5 More</a></button>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </div>  
                        </div>
                  <!--
                  <div class="row">
                     
                     <div class="col-xl-12">
                        <div class="card card-default">
                           <div class="card-header">
                              <div class="px-2 float-right badge badge-danger">5</div>
                              <div class="px-2 mr-2 float-right badge badge-success">12</div>
                              <div class="card-title">Team messages</div>
                           </div>
                           <div class="list-group" data-height="180" data-scrollable="">
                              
                              <div class="list-group-item list-group-item-action">
                                 <div class="media"><img class="align-self-start mx-2 circle thumb32" src="img/user/02.jpg" alt="Image">
                                    <div class="media-body text-truncate">
                                       <p class="mb-1"><strong class="text-primary"><span class="circle bg-success circle-lg text-left"></span><span>Catherine Ellis</span></strong></p>
                                       <p class="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                    </div>
                                    <div class="ml-auto"><small class="text-muted ml-2">2h</small></div>
                                 </div>
                              </div>
                              <div class="list-group-item list-group-item-action">
                                 <div class="media"><img class="align-self-start mx-2 circle thumb32" src="img/user/03.jpg" alt="Image">
                                    <div class="media-body text-truncate">
                                       <p class="mb-1"><strong class="text-primary"><span class="circle bg-success circle-lg text-left"></span><span>Jessica Silva</span></strong></p>
                                       <p class="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                    </div>
                                    <div class="ml-auto"><small class="text-muted ml-2">3h</small></div>
                                 </div>
                              </div>
                              <div class="list-group-item list-group-item-action">
                                 <div class="media"><img class="align-self-start mx-2 circle thumb32" src="img/user/09.jpg" alt="Image">
                                    <div class="media-body text-truncate">
                                       <p class="mb-1"><strong class="text-primary"><span class="circle bg-danger circle-lg text-left"></span><span>Jessie Wells</span></strong></p>
                                       <p class="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                    </div>
                                    <div class="ml-auto"><small class="text-muted ml-2">4h</small></div>
                                 </div>
                              </div>
                              <div class="list-group-item list-group-item-action">
                                 <div class="media"><img class="align-self-start mx-2 circle thumb32" src="img/user/12.jpg" alt="Image">
                                    <div class="media-body text-truncate">
                                       <p class="mb-1"><strong class="text-primary"><span class="circle bg-danger circle-lg text-left"></span><span>Rosa Burke</span></strong></p>
                                       <p class="mb-1 text-sm">Cras sit amet nibh libero, in gravida nulla. Nulla...</p>
                                    </div>
                                    <div class="ml-auto"><small class="text-muted ml-2"> 1d</small></div>
                                 </div>
                              </div>
                              <div class="list-group-item list-group-item-action">
                                 <div class="media"><img class="align-self-start mx-2 circle thumb32" src="img/user/10.jpg" alt="Image">
                                    <div class="media-body text-truncate">
                                       <p class="mb-1"><strong class="text-primary"><span class="circle bg-danger circle-lg text-left"></span><span>Michelle Lane</span></strong></p>
                                       <p class="mb-1 text-sm">Mauris eleifend, libero nec cursus lacinia...</p>
                                    </div>
                                    <div class="ml-auto"><small class="text-muted ml-2"> 2d</small></div>
                                 </div>
                              </div>
                           </div>
                           <div class="card-footer">
                              <div class="input-group"><input class="form-control form-control-sm" type="text" placeholder="Search message .."><span class="input-group-btn"><button class="btn btn-secondary btn-sm" type="submit"><i class="fa fa-search"></i></button></span></div>
                           </div>
                        </div>
                     </div>
                  </div> -->
               </div><!-- END dashboard main content-->
 
            </div>
          <div>
            <p>
              Welcome to your new Gatsby + Netlify Functions + Netlify Identity
              site
            </p>
            <ul>
              <li>
                This site has statically generated marketing pages like this one
                and <Link to="/page-2/">page 2.</Link>{' '}
              </li>
              <li>
                It also has a dynamically generated clientside app guarded by
                authentication:
                <ul>
                  <li>
                    <Link to="/app/">
                      <b>Go to App (with Netlify Identity)</b>
                    </Link>{' '}
                  </li>
                </ul>
              </li>
              <li>
                You can{' '}
                <a href="https://github.com/sw-yx/jamstack-hackathon-starter">
                  view source here
                </a>
              </li>
              <li>
                or see{' '}
                <a href="https://youtu.be/bueXJInQt2c">
                  the Youtube walkthrough
                </a>
              </li>
              <li>
                or
                <a href="https://app.netlify.com/start/deploy?repository=https://github.com/sw-yx/jamstack-hackathon-starter&stack=cms">
                  <img
                    src="https://www.netlify.com/img/deploy/button.svg"
                    alt="Deploy to Netlify"
                  />
                </a>
              </li>
            </ul>
            <hr />
            <p>
              You can still access Netlify functions even on static "marketing
              pages":{' '}
            </p>
            <button onClick={this.handleClick}>
              {loading ? 'Loading...' : 'Call Lambda Function'}
            </button>
            <br />
            <pre>
              {msg
                ? 'Here is the response: ' + msg
                : 'click the button and watch this!'}
            </pre>
          </div>
          <div
            style={{
              borderLeft: 'brown',
              borderLeftStyle: 'dashed',
              paddingLeft: '3rem',
            }}
          >
            <p>Now go build something great.</p>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
              <Image />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
