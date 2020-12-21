/*
 * @Author: sam.li
 * @Date: 2020-10-27 14:01:51
 * @LastEditors: sam.li
 * @LastEditTime: 2020-10-27 14:02:05
 */
'use strict';

const { Controller } = require('egg');

/**
 * Controller - 消息通知
 * @class
 * @author ruiyong-lee
 */
class NoticeController extends Controller {
    /**
   * 全部标记为已读
   */
    async readAll() {
        const { ctx } = this;
        await ctx.service.notice.readAll(ctx.request.body);
        ctx.success();
    }

    /**
   * 获取消息概况（最多5条）
   */
    async overview() {
        const { ctx } = this;
        const noticeData = await ctx.service.notice.overview(ctx.request.body);
        ctx.success(noticeData);
    }

    /**
   * 获取消息分页列表
   */
    async query() {
        const { ctx } = this;
        const noticeData = await ctx.service.notice.query(ctx.request.body);
        ctx.success(noticeData);
    }
}

module.exports = NoticeController;
