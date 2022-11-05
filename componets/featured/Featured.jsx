import { Add, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className='featured'>
        {
            type && (
                <div className='catergory'>
                    <span>{type === "movie"? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                        <option value="anime">Anime</option>
                        <option value="sci-fi">Sci-fi</option>

                    </select>

                </div>
            )
        }
        <img width="100%" 
        src="https://wallpaperaccess.com/full/2387027.jpg" alt="" />
        <div className="info">
            <img src="https://www.pngmart.com/files/22/Money-Heist-Logo-PNG-Image.png" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum totam assumenda nobis laboriosam suscipit corrupti rem a, aliquam pariatur vel qui facere. Assumenda.
            </span>
            <div className="buttons">
                <button className='play'>
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className='play1'>
                    <Add/>
                    <span>My List</span>
                </button>
            </div>

        </div>
    </div>
  )
}
