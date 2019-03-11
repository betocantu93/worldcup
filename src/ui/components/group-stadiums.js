import { helper as buildHelper } from '@ember/component/helper';

export function groupStadiums([matches, stadiums] /*, hash*/ ) {
  return stadiums.filter(stadium => matches.find(match => match.stadium === stadium.id))
}

export const helper = buildHelper(groupStadiums);
