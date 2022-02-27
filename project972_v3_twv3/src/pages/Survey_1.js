import React from 'react';
import './Survey_1.css';

function Survey_1() {
  return (
    <div>
        Survey_1

        <div className="main">
            <h1 id="title">
                1st Madinina Survey
            </h1>
            
            <p id="description">
                Merci de prendre le temps de partiper à cette expérience!
            </p>

            <div className="main-content">
                <div classsName="form-content">
                    <form id="survey-form">

                        <label for="name" id="name-label">
                            Name
                        </label>
                        <input 
                            id="name" 
                            type="text" 
                            required placeholder="Enter your name" />
                        
                        <label 
                            for="email" 
                            id="email-label">
                            Email
                        </label>
                        <input 
                            id="email" 
                            type="email" 
                            required placeholder="Enter your email" />

                        <label 
                            for="number" 
                            id="number-label">
                            Enter your rate from 1 to 10
                        </label>
                        <input 
                            id="number" 
                            type="number" 
                            min="1" max="10" 
                            required placeholder="Enter your rate" />

                        <br />

                        <label for="dropdown">
                            Which option best describes your current role?
                        </label>
                            <select id="dropdown">
                                <option value="studen">Student</option>
                                <option value="full-time-learner">Full time learner</option>
                                <option value="full-time-job">Full time job</option>
                                <option value="prefer-not-to-say">Prefer not to say</option>
                                <option value="other">Other</option>
                            </select>

                        <fieldset className="fieldset1">

                            <legend>
                                Would you recommend my channel to a friend?
                            </legend>
                                <input 
                                    type="radio" 
                                    name="action" 
                                    checked id="definitely" 
                                    value="definitely" />
                                    <label 
                                        for="definitely">
                                            Definitely
                                    </label>
                                
                                <br />
                                
                                <input 
                                    type="radio" 
                                    name="action" 
                                    id="maybe" 
                                    value="maybe"  />
                                    <label 
                                        for="maybe">
                                            Maybe
                                    </label>
                                
                                <br />
                                
                                <input 
                                    type="radio" 
                                    name="action" 
                                    id="not-sure" 
                                    value="not-sure" />
                                    <label for="not-sure">
                                        Not sure
                                    </label>
                                
                                <br />
                        </fieldset>

                        <p className="imp-title">
                            What would you like to see improved?
                        </p>
                        
                        <input 
                            type="checkbox" 
                            id="video-length" 
                            name="video-length" 
                            value="video-length" />
                        <label 
                            for="video-length">
                            Video length
                        </label>
                        
                        <br />
                        
                        <input 
                            type="checkbox" 
                            id="content-quality" 
                            name="content-quality" 
                            value="content-quality" />
                        <label 
                            for="content-quality">
                            Content quality
                        </label>
                        
                        <br />
                        
                        <input 
                            type="checkbox" 
                            id="more-videos" 
                            name="more-videos" 
                            value="more-videos" />
                        <label 
                            for="more-videos">
                            Add more videos
                        </label>
                        
                        <br />

                        <label 
                            for="comment">
                            Any comments or suggestions?
                        </label>
                        <textarea 
                            rows="4" 
                            cols="50" 
                            id="comment"
                            required placeholder="Enter your comment here...">
                        </textarea>
                        
                        <button 
                            type="submit" 
                            id="submit">
                            Submit
                        </button>
                    
                    </form>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Survey_1