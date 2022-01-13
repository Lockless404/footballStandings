import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import TableLine from './TableLine'
import { useSelector } from 'react-redux';

const Table = () => {

  const dataa = useSelector((state) => state.tableReducer);

  const data = {
    "status":true,
    "data":{
      "name":"English Premier League",
      "abbreviation":"Prem",
      "seasonDisplay":"2020-2021",
      "season":2020,
      "standings":[
        {
          "team":{
            "id":"382",
            "uid":"s:600~t:382",
            "location":"Manchester City",
            "name":"Manchester City",
            "abbreviation":"MNC",
            "displayName":"Manchester City",
            "shortDisplayName":"Man City",
            "isActive":true,
            "logos":[
              {
                "href":"https://a.espncdn.com/i/teamlogos/soccer/500/382.png",
                "width":500,
                "height":500,
                "alt":"",
                "rel":["full","default"],
                "lastUpdated":"2019-05-08T16:07Z"
              }
            ]
          },
          "note":{
            "color":"#81D6AC",
            "description":"Champions League",
            "rank":1
          },
          "stats":[
            {
              "name":"wins",
              "displayName":"Wins",
              "shortDisplayName":"W",
              "description":"Wins",
              "abbreviation":"W",
              "type":"wins",
              "value":27,
              "displayValue":"27"
            },
            {
              "name":"losses",
              "displayName":"Losses",
              "shortDisplayName":"L",
              "description":"Losses",
              "abbreviation":"L",
              "type":"losses",
              "value":6,
              "displayValue":"6"
            },
            {
              "name":"ties",
              "displayName":"Draws",
              "shortDisplayName":"D",
              "description":"Draws",
              "abbreviation":"D",
              "type":"ties",
              "value":5,
              "displayValue":"5"
            },
            {
              "name":"gamesPlayed",
              "displayName":"Games Played",
              "shortDisplayName":"GP",
              "description":"Games Played",
              "abbreviation":"GP",
              "type":"gamesplayed",
              "value":38,
              "displayValue":"38"
            },
            {
              "name":"pointsFor",
              "displayName":"Goals For",
              "shortDisplayName":"F",
              "description":"Goals For",
              "abbreviation":"F",
              "type":"pointsfor",
              "value":83,
              "displayValue":"83"
            },
            {
              "name":"pointsAgainst",
              "displayName":"Goals Against",
              "shortDisplayName":"A",
              "description":"Goals Against",
              "abbreviation":"A",
              "type":"pointsagainst",
              "value":32,
              "displayValue":"32"
            },
            {
              "name":"points",
              "displayName":"Points",
              "shortDisplayName":"P",
              "description":"Points",
              "abbreviation":"P",
              "type":"points",
              "value":86,
              "displayValue":"86"
            },
            {
              "name":"rankChange",
              "displayName":"Rank Change",
              "shortDisplayName":"Rank Change",
              "description":"Rank Change",
              "abbreviation":"RC",
              "type":"rankchange",
              "value":0,
              "displayValue":"0"
            },
            {
              "name":"rank",
              "displayName":"Rank",
              "shortDisplayName":"Rank",
              "description":"Rank",
              "abbreviation":"R",
              "type":"rank",
              "value":1,
              "displayValue":"1"
            },
            {
              "name":"pointDifferential",
              "displayName":"Goal Difference",
              "shortDisplayName":"GD",
              "description":"Goal Difference",
              "abbreviation":"GD",
              "type":"pointdifferential",
              "value":51,
              "displayValue":"+51"
            },
            {
              "name":"deductions",
              "displayName":"Point Deductions",
              "shortDisplayName":"Deductions",
              "description":"Point Deductions",
              "abbreviation":"PD",
              "type":"deductions",
              "value":0,"displayValue":""
            },
            {
              "name":"ppg",
              "displayName":"Points Per Game",
              "shortDisplayName":"PPG",
              "description":"Points Per Game",
              "abbreviation":"PPG",
              "type":"ppg",
              "value":0,
              "displayValue":"0"
            },
            {
              "id":"0",
              "name":"All Splits",
              "abbreviation":"Total"
              ,"displayName":"Overall",
              "shortDisplayName":"OVER",
              "description":"Overall Record",
              "type":"total",
              "summary":"27-5-6",
              "displayValue":"27-5-6"
            }
          ]
        }
      ]
    }
  }

  return (
    <div className='App'>
      <Header />
      <hr />
      <section>
        {/* <h2>{data.data.season}-{data.data.season+1} Season</h2> */}
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>GD</th>
              <th>GF</th>
              <th>GA</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {dataa.table.map((standing) => (
              <TableLine key={standing.team.id} data={standing} />
            ))}
          </tbody>
        </table>
      </section>
      <Link to="/">Back</Link>
    </div>
  )
}

export default Table
