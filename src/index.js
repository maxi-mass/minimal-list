import './styles.scss'
import module from '@src/module'

console.log(module)
const fn = async () => await Promise.resolve('result')
fn().then(console.log)
