import { helper as buildHelper } from '@ember/component/helper';

export function formatDate([date]/*, hash*/) {
  let d = new Date(date);
  return ` ${d.getMonth()+1} / ${d.getDate()} / ${d.getFullYear()} ${d.getHours()}:${d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()}`;
}

export const helper = buildHelper(formatDate);
