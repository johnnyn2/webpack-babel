import $ from 'jquery'
import constants from '../../util/constants'

$(() => {
  const { prefix } = constants
  $('#sum').on('click', e => {
    const a = Number($('#a').val())
    const b = Number($('#b').val())
    const r = a + b
    $('#result').html(prefix + r)
  })
})
