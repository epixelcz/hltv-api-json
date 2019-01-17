# Web based API on the unofficial HLTV Node.js API
https://github.com/gigobyte/HLTV

## URLs
every link corresponding with function

__/match -> HLTV.getMatches()__

---

__/match/stats/:from(*)/:to(*) --> HLTV.getMatchesStats({startDate: '2017-07-10', endDate: '2017-07-18'})__

---

__/match/:matchID(*)/stats --> HLTV.getMatchStats({id: 62979})__

---

__/match/:matchID(*) --> HLTV.getMatch({id: 2306295})__

---

__/team/:teamID(*)/stats --> HLTV.getTeamStats({id: 6137})__

---

__/team/:teamID(*) --> HLTV.getTeam({id: 6137})__

---

__/player/:playerID(*)/stats --> HLTV.getPlayerStats({id: 7998})__

---

__/player/:playerID(*) --> HLTV.getPlayer({id: 6137})__

---

__/player/stats/:from(*)/:to(*) --> HLTV.getPlayerRanking({startDate: '2018-07-01', endDate: '2018-10-01'})__

---

__/event/:event(*) --> HLTV.getEvent({id: 3389})__