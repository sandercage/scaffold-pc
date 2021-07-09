import React from 'react'

declare global {
    namespace UseUpdateState {
        /**
         * 按常量、函数更新
         */
        export type PartialStateOrFunc<T> = Partial<T> | ((prevState: T) => Partial<T>)

        export interface UpdateState<T> {
            (partialState: PartialStateOrFunc<T>, callback?: (state: T) => unknown): unknown
        }
    }
}

/**
 * 可按需更新状态的hooks
 * @param initialState
 */
function useUpdateState<T>(initialState: T): [T, UseUpdateState.UpdateState<T>] {
    const [state, setState] = React.useState<T>(() => {
        if (typeof initialState === 'function') {
            return initialState()
        }
        return initialState
    })
    /**
     * 更新状态后的回调函数
     */
    const callbackRef = React.useRef<((state: T) => unknown) | undefined>()
    /**
     * 按需更新状态
     * 注：对象类型只支持一层
     */
    const updateState: UseUpdateState.UpdateState<T> = React.useCallback(
        (partialState, callback) => {
            callbackRef.current = callback
            if (typeof partialState === 'function') {
                setState((prevState: T) => ({
                    ...prevState,
                    ...partialState(prevState),
                }))
            } else {
                setState((prevState: T) => ({
                    ...prevState,
                    ...partialState,
                }))
            }
        },
        [],
    )

    React.useEffect(() => {
        callbackRef.current?.(state)
    }, [state])

    return [state, updateState]
}

export default useUpdateState
