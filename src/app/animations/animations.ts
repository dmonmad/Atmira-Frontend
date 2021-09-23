import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations'

export const fader = trigger('routeAnimations', [
  transition('HomeComponent <=> DetailsComponent', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),
    query(':enter', [
      animate(
        '600ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' }),
      ),
    ]),
  ]),
])

export const slider = trigger('routeAnimations', [
  transition('* => HomeComponent', slideTo('left')),
  transition('* => DetailsComponent', slideTo('right')),
  transition('DetailsComponent => *', slideTo('right')),
  transition('HomeComponent => *', slideTo('left')),
])

function slideTo(direction: any) {
  const optional = { optional: true }
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional,
    ),
    query(':enter', [style({ [direction]: '-100%' })], optional),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '100%' }))],
        optional,
      ),
      query(
        ':enter',
        [animate('600ms ease', style({ [direction]: '0%' }))],
        optional,
      ),
    ]),
  ]
}
