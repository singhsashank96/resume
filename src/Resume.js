import React from "react";

function Resume() {
  return (
    <div>
      <div id="stripes" class="stripes"></div>
      <div style={{ marginLeft: 70, marginRight: 70, marginBottom: 50 }}>
        <div className="Resumetop my-3">
          <div class="container text-center">
            <div class="row">
              <div class="col-md-2">
                <h1 className="fs-1" style={{ letterSpacing: "5px" }}>
                  NAME
                </h1>
              </div>
            </div>
            <div class="row mb-1">
              <div class="col-md-4 offset-md-8">
                <h1 className="fs-3" style={{ letterSpacing: "5px" }}>TITLE</h1>{" "}
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-8 offset-md-2 border-3 border-bottom border-dark mb-3"
                style={{}}
              ></div>
            </div>
          </div>
         
          {/* nave Bar */}
          <div className=" ml-3 mr-4">
            <div
              class="container boxShadow  justify-content-between py-3 "
              style={{ backgroundColor: "blue" }}
            >
              <div class="container ">
                <div class="col-md-9 offset-md-1 ">
                  <div class="row">
                    <div class="col">
                      <div class="row">
                        <div
                          class="col-md-1 text-center"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "white",
                          }}
                        >
                          <i
                            class="fa-solid fa-phone"
                            style={{ fontSize: "12px", marginLeft: -3 }}
                          >
                          
                          </i>
                        </div>

                        <text className="col" style={{ color: "white" }}>
                          +123-456-7890
                        </text>
                      </div>
                    </div>
                    <div class="col offset-md-3">
                      
                      <div className="row">  
                      <div 
                          class="col-md-1 text-center"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "white",
                          }}
                        >
                          <i
                            class="fa-solid fa-location-dot"
                            style={{ fontSize: "12px", marginLeft: -3 }}
                          >
                          
                          </i>
                        </div>

                        <text className="col" style={{ color: "white" }}>
                        123 Anywhere St.,Any City
                        </text>
                        </div>
                        
                    </div>
                  </div>
                  <div class="row">
                    
                    <div class="col">
                    <div class="row">
                        <div
                          class="col-md-1 text-center my-1"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "white",
                          }}
                        >
                          <i
                            class="fa-solid fa-envelope-open"
                            style={{ fontSize: "12px", marginLeft: -3 }}
                          >
                          
                          </i>
                        </div>

                        <text className="col" style={{ color: "white" }}>
                        hello@reallygreatsite.com
                        </text>
                      </div>
                    
                    </div>
                      
                       
                    <div class="col col offset-md-3 my-1">
                 
                      <div className="row">  
                      <div 
                          class="col-md-1 text-center"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "white",
                          }}
                        >
                          <i
                            class="fa-solid fa-location-dot"
                            style={{ fontSize: "12px", marginLeft: -3 }}
                          >
                          
                          </i>
                        </div>

                        <text className="col" style={{ color: "white" }}>
                       WWW.reallygreatsite.com
                        </text>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
          {/* contener  */}
          <div className="container mt-3">
            <div class="row">
              {/* left side  */}
              <div class="col-8">
                <div>
                  {/*     About Me */}
                  <div>
                    <div className="row">
                      <div class="col-10 my-1">
                        <h2 className="text-primary">
                          About Me
                          <div class=" border-2 border-bottom border-primary"></div>
                        </h2>
                      </div>
                      <div class="col-2 mt-3">
                        <i class="fa-solid fa-user icr"></i>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet. Ut aspernatur beatae nam
                      maiores provident sit explicabo sint. Ea aliquam tempora
                      ut suscipit voluptatem ut sint voluptatibus ut delectus
                      inventore ex ipsa
                    </p>
                  </div>

                  {/* experience */}

                  <div>
                    <div className="row">
                      <div class="col-10">
                        <h2 className="text-primary">
                          EXPERIENCE
                          <div class=" border-2 border-bottom border-primary"></div>
                        </h2>
                      </div>
                      <div class="col-2 mt-3">
                        <i class="fa-solid fa-briefcase icr1 "></i>
                      </div>
                    </div>

                    <div>
                      <div className="row">
                        <div class="col-9">
                          <strong style={{ color: "black" }}>
                            JOB TITLE HERE
                          </strong>
                        </div>
                        <div class="col-3 text-center">
                          <div className="text-primary">2000-2000</div>
                        </div>
                      </div>
                      <div>
                        Company Name - Any City
                        <p className="my-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                          <br />
                          Praesent molestie orci ac nulla dapibus, eget suscipit
                          felis.
                          <br />
                          porta. Suspendisse fringilla et libero nec commodo.
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="row">
                        <div class="col-9">
                          <strong style={{ color: "black" }}>
                            JOB TITLE HERE
                          </strong>
                        </div>
                        <div class="col-3 text-center">
                          <div className="text-primary">2000-2000</div>
                        </div>
                      </div>
                      <div>
                        Company Name - Any City
                        <p className="my-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit..
                          <br />
                          Praesent molestie orci ac nulla dapibus, eget
                          suscipit.
                          <br />
                          felis porta. Suspendisse fringilla et libero nec
                          commodo.
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="row">
                        <div class="col-9">
                          <strong style={{ color: "black" }}>
                            JOB TITLE HERE
                          </strong>
                        </div>
                        <div class="col-3 text-center">
                          <div className="text-primary">2000-2000</div>
                        </div>
                      </div>
                      <div>
                        Company Name - Any City
                        <p className="my-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit..
                          <br />
                          Praesent molestie orci ac nulla dapibus, eget
                          suscipit.
                          <br />
                          felis porta. Suspendisse fringilla et libero nec
                          commodo.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="d-flex expclass">
                    <div>
                      <strong style={{ color: "black" }}>JOB TITLE HERE</strong>
                    </div>
                    <div>2000-2000</div>
                  </div>
                  <div>
                    Company Name - Any City
                    <p className="my-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent molestie orci ac nulla dapibus, eget suscipit
                      felis porta. Suspendisse fringilla et libero nec commodo.
                    </p>
                  </div>
                  <div className="d-flex expclass">
                    <div>
                      <strong style={{ color: "black" }}>JOB TITLE HERE</strong>
                    </div>
                    <div>2000-2000</div>
                  </div>
                  <div>
                    Company Name - Any City
                    <p className="my-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent molestie orci ac nulla dapibus, eget suscipit
                      felis porta. Suspendisse fringilla et libero nec commodo.
                    </p>
                  </div> */}

                  {/* Education */}

                  <div className="my-4">
                    <div className="row my-2">
                      <div class="col-10">
                        <h2 className="text-primary">
                          Education
                          <div class=" border-2 border-bottom border-primary"></div>
                        </h2>
                      </div>
                      <div class="col-2 mt-3">
                        <i
                          class="fa-solid fa-graduation-cap"
                          style={{ color: "blue", height: "25px" }}
                        ></i>
                      </div>
                    </div>

                    <div>
                      <div className="row">
                        <div class="col-9">
                          <strong style={{ color: "black" }}>
                            Univeristy / College
                          </strong>
                        </div>
                        <div class="col-3 text-center">
                          <div className="text-primary">Completed in 2016</div>
                        </div>
                      </div>
                      <div>
                        <p>Degree Title</p>
                        <p>Relevant Modules:</p>

                        <p className="my-2">
                          <ul>
                            {" "}
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </li>
                            <li>Praesent molestie orci ac nulla dapibus,</li>
                          </ul>
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="row">
                        <div class="col-9">
                          <strong style={{ color: "black" }}>
                            Univeristy / College
                          </strong>
                        </div>
                        <div class="col-3 text-center">
                          <div className="text-primary">Completed in 2016</div>
                        </div>
                      </div>
                      <div>
                        <p>Degree Title</p>
                        <p>Relevant Modules:</p>

                        <p className="my-2">
                          <ul>
                            {" "}
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </li>
                            <li>Praesent molestie orci ac nulla dapibus,</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-1 border-3 border-start border-primary"
                style={{
                  marginTop: 50,
                  marginBottom: 50,
                  padding: 0,
                  width: 10,
                }}
              >
                {" "}
              </div>
              {/*  right  side */}
              <div class="col-3">
                <div className="my-3">
                  {/* Skill */}
                  <div className="my-3"> 
                    <div className="row">
                      <div class="col-10 my-2">
                        <h3 className="text-primary">
                          SKILL
                          <div class=" border-2 border-bottom border-primary"></div>
                        </h3>
                      </div>
                      <div class="col-2 mt-3 my-2">
                    <i class="fa-solid fa-circle icr1"></i>
                      </div>
                    </div>
                    <div>
                      Serving Guest
                      <div class="progress my-2">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div>
                      Serving Guest
                      <div class="progress my-2">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div>
                      Serving Guest
                      <div class="progress my-2">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div>
                      Serving Guest
                      <div class="progress my-2">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* Certificate */}
                  <div>
                    <div className="row">
                      <div class="col-10">
                        <h2 className="text-primary  my-3">
                        CERTIFICATES
                          <div class=" border-2 border-bottom border-primary"></div>
                        </h2>
                      </div>
                      <div class="col-2 mt-3">
                      <i class="fa-solid fa-certificate icr1"></i>
                      </div>
                    </div>
                    <p>
                      <ul>
                     <li>  Lorem ipsum dolor sit amet. </li>
                     <li>consectetur adipiscing elit</li> 
                     <li>Praesent molestie orci ac</li>
                    <li>nulla dapibus, eget suscipit</li>
                     <li>felis porta. Suspendisse</li>
                  <li>fringilla et libero nec comm</li>
                      </ul>
                     
                    </p>
                  </div>
                  {/* Lang */}
                  <div className="my-4">
                    <div className="row my-4">
                      <div class="col-10">
                        <h3 className="text-primary my-1">
                        LANGUAGES
                          <div class=" border-2 border-bottom border-primary"></div>
                        </h3>
                      </div>
                      <div class="col-2 mt-3">
                      <i class="fa-solid fa-language icr1"></i>
                      </div>
                    </div>
                  
                    <div>
                   English
                      <div class="progress my-3">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="my-3">
                    Spanish
                      <div class="progress my-2">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="my-2">
                      Serving Guest
                      <div class="progress my-2">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className=" position-absolute bottom-0 end-0" >
                    <div className="row">
                    <div className="rounded-circle border border-dark  border-2 mx-2" style={{ width : 30  , height :30}}> </div>
                    <div className="rounded-circle border border-dark  border-2  mx-2" style={{ width : 30  , height :30}}> </div>
                    <div className="rounded-circle border border-dark  border-2  mx-2" style={{ width : 30  , height :30}}> </div>
                    <div className="rounded-circle border border-dark  border-2  mx-2" style={{ width : 30  , height :30}}> </div>
                    {/* <div className="rounded-circle " style={{ width : 50  , height :50 , backgroundColor : "blue" , marginBottom : -20}}> </div> */}
                    </div>
                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
