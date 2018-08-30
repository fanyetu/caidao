/**
 * create by zhanghaonan 2018/8/30
 */
module.exports = async (ctx, next)=>{
  ctx.state.data = {
    text: 'hello'
  }
}
