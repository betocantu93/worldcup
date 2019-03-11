import {
  helper as buildHelper
} from '@ember/component/helper';

export function groupTeams([matches, teams, by = ""] ) {
  switch(by) {
    case 'away':
      return teams.filter(team => matches.find(match => match.away_team === team.id))
    case 'home':
      return teams.filter(team => matches.find(match => match.home_team === team.id ))
  }
  return teams.filter(team => matches.find(match => match.home_team === team.id || match.away_team === team.id))
  
}

export const helper = buildHelper(groupTeams);
