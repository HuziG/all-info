import request from '../utils/request'

/**
 * 7天热番
 */
export const getWeek = () => request('/carton-video/biliweek')

/**
 * 3天热番
 */
export const getDay = () => request('/carton-video/biliday')

/**
 * 最新番剧
 */
export const getNewest = (page: number) => request('/carton-video/bilinewest?page=1')
